import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { RequestDocument } from './schemas/request.schema';

@Injectable()
export class RequestService {
  @InjectModel(MODEL_ENUMS.REQUEST) private RequestModel : Model<RequestDocument>

  async createRequest(requestDetails: CreateRequestDto) {
    const newRequest =  await new this.RequestModel(requestDetails);
    return  newRequest.save();
  }

  async updateRequest(requestId: string, requestDetails: UpdateRequestDto,
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

  async getallRequests(){
    const requests = await this.RequestModel.find();
    if(requests && requests.length !==0){
      return requests
    }
    throw new NotFoundException(`Requests not found`);
  }

  async getRequestById(requestId : string){
    const request = await this.RequestModel.findById(requestId);

    if (!request) {
      throw new NotFoundException(`Request #${requestId} not found`);
    }
    return request;

  }
}
