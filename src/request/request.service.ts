import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Types } from 'mongoose';
import { MasterDataService } from 'src/master-data/master-data.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateRequestDto } from './dto/create-request.dto';
import { RequestSearchCriteriaDto } from './dto/request.schemaCriteria.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestDocument } from './schemas/request.schema';

@Injectable()
export class RequestService {
    @InjectModel(MODEL_ENUMS.REQUEST)
    private RequestModel: Model<RequestDocument>;

    constructor(private readonly masterDataService: MasterDataService) {}

    async createRequest(requestDetails: CreateRequestDto) {
        const newRequest = await new this.RequestModel(requestDetails);
        return newRequest.save();
    }

    async updateRequest(
        requestId: string,
        requestDetails: UpdateRequestDto,
    ): Promise<RequestDocument> {
        const updatedRequest = await this.RequestModel.findByIdAndUpdate(
            requestId,
            requestDetails,
            { new: true },
        );
        if (!updatedRequest) {
            throw new NotFoundException(`Request #${requestId} not found`);
        }
        return updatedRequest;
    }

    async getallRequests() {
        const requests = await this.RequestModel.find();
        if (requests && requests.length !== 0) {
            return requests;
        }
        throw new NotFoundException(`Requests not found`);
    }

    async getRequestById(requestId: string) {
        const request = await this.RequestModel.findById(requestId);

        if (!request) {
            throw new NotFoundException(`Request #${requestId} not found`);
        }
        return request;
    }

    async requestSearchCriteria(
        criteria: RequestSearchCriteriaDto,
    ): Promise<any> {
        const search = { $and: [] };
        let result: any = [];

        if (criteria.serachTerm && criteria.serachTerm.trim() !== '') {
            search.$and.push({
                title: new RegExp(criteria.serachTerm.toString(), 'i'),
            });
        }

        if (criteria.rfqStatus.length !== 0) {
            search.$and.push({
                rfqStatus: {
                    $in: criteria.rfqStatus.map(
                        (status) => new Types.ObjectId(status),
                    ),
                },
            });
        }

        if (criteria.quoteStatus.length !== 0) {
            search.$and.push({
                quoteStatus: {
                    $in: criteria.quoteStatus.map(
                        (status) => new Types.ObjectId(status),
                    ),
                },
            });
        }

        if (criteria.paymentStatus.length !== 0) {
            search.$and.push({
                paymentStatus: {
                    $in: criteria.paymentStatus.map(
                        (status) => new Types.ObjectId(status),
                    ),
                },
            });
        }

        if (criteria.salesPersons.length !== 0) {
            search.$and.push({
                persons: {
                    $in: criteria.salesPersons.map(
                        (person) => new Types.ObjectId(person),
                    ),
                },
            });
        }

        if (criteria.quoteSubmittedTo.length !== 0) {
            search.$and.push({
                quoteSubmittedTo: {
                    $in: criteria.quoteSubmittedTo.map(
                        (person) => new Types.ObjectId(person),
                    ),
                },
            });
        }

        const paginationProps: any = [
            { $match: search.$and.length > 0 ? search : {} },
        ];

        if (
            (criteria.pageSize || criteria.pageSize > 0) &&
            (criteria.pageNumber || criteria.pageNumber === 0)
        ) {
            paginationProps.push({
                $skip: criteria.pageNumber * criteria.pageSize,
            });
            paginationProps.push({ $limit: criteria.pageSize });
        }

        paginationProps.push({
            $addFields: {
                assignTo: '$assignToObj',
                createdByOrganization: '$createdByOrganizationObj',
            },
        });

        let sortObject;
        if (criteria.sortField) {
            sortObject = {};
            sortObject[criteria.sortField] = criteria.sortOrder;
            paginationProps.push({ $sort: sortObject });
        }

        result = await this.RequestModel.aggregate([
            { $match : search.$and.length > 0 ? search : {}},
            {
                $lookup : {
                    from : 'rfqstatuses',
                    localField : 'rfqStatus',
                    foreignField : '_id',
                    as : 'rfqStatusData'
                },
            },
            {
                $lookup : {
                    from : 'paymentrequeststatuses',
                    localField : 'paymentStatus',
                    foreignField : '_id',
                    as : 'paymentStatusData'
                },
            },
            {
                $lookup : {
                    from : 'quotestatuses',
                    localField : 'quoteStatus',
                    foreignField : '_id',
                    as : 'quoteStatusData'
                },
            },
            {
                $lookup : {
                    from : 'sales-people',
                    localField : 'persons',
                    foreignField : '_id',
                    as : 'salesPersonData'
                },
            },
            {
                $lookup : {
                    from : 'sales-people',
                    localField : 'quoteSubmittedTo',
                    foreignField : '_id',
                    as : 'quoteSubmittedToData'
                },
            },
            {
                $facet: {
                    requests: paginationProps,
                    count: [
                        { $match: search.$and.length > 0 ? search : {} },
                        { $count: 'count' },
                    ],
                },
            },
        ]);

        return result;
    }

    async getDashBoardPaymentStatusMetrics() {
        let paymentStatus = await this.masterDataService.getAllMasterData();

        paymentStatus = paymentStatus.paymentRequestStatus.map(
            (t: any) => t._doc,
        );

        const result = await this.RequestModel.aggregate([
            {
                $facet: {
                    total: [{ $count: 'total' }],
                    received: [
                        {
                            $match: {
                                paymentStatus: new mongoose.Types.ObjectId(
                                    paymentStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'RECEIVED',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'received' },
                    ],
                    pending: [
                        {
                            $match: {
                                paymentStatus: new mongoose.Types.ObjectId(
                                    paymentStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'PENDING',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'pending' },
                    ],
                },
            },
        ]);

        return result;
    }

    async getDashBoardRFQStatusMetrics() {
        let rfqStatus = await this.masterDataService.getAllMasterData();

        rfqStatus = rfqStatus.RFQStatusData.map(
            (t: any) => t._doc,
        );

        const result = await this.RequestModel.aggregate([
            {
                $facet: {
                    total: [{ $count: 'total' }],
                    open: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'OPEN',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                    inProgress: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'INPROGRESS',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                    submit: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'SUBMIT',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                    cancelled: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'CANCELLED',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                    expired: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'EXPIRED',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                    noBid: [
                        {
                            $match: {
                                rfqStatus: new mongoose.Types.ObjectId(
                                    rfqStatus
                                        .find(
                                            (status: any) =>
                                                status.status === 'NOBID',
                                        )
                                        ._id.toString(),
                                ),
                            },
                        },
                        { $count: 'count' },
                    ],
                },
            },
        ]);

        return result;
    }
}
