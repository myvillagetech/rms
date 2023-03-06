import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiTags } from '@nestjs/swagger';
import { Put, Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { RequestSearchCriteriaDto } from './dto/request.schemaCriteria.dto';

@Controller('request')
@ApiTags('request')
export class RequestController {
	constructor(private readonly requestService: RequestService) { }

	@Post()
	async createRequest(@Res() response, @Body() requestDetails: CreateRequestDto) {
		try {
			const newRequest = await this.requestService.createRequest(requestDetails);
			return response.status(HttpStatus.CREATED).json({
				message: 'Request created successfully',
				success: true,
				newRequest,
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Error: Request not created!',
				error: error,
				success: false,
			});
		}
	}

	@Get()
	async getAllRequests(@Res() response: any) {
		try {
			let requests = await this.requestService.getallRequests();
			return response.status(HttpStatus.OK).json({
				message: 'Request fetched successfully',
				success: true,
				requests,
			});

		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Error: Request Details not found!',
				error: error,
				success: false,
			});
		}
	}

	@Get('/:id')
	async getRequestById(@Res() response, @Param('id') requestId: string) {
		try {
			const request = await this.requestService.getRequestById(requestId);
			return response.status(HttpStatus.OK).json({
				message: 'Request found successfully',
				request,
				success: true,
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Error: Request Details not found!',
				error: error,
				success: false,
			});
		}
	}

	@Put('/:id')
	async updateRequest(
		@Res() response,
		@Param('id') requestId: string,
		@Body() requestDetails: UpdateRequestDto,
	) {
		try {
			const updatedRequest = await this.requestService.updateRequest(
				requestId,
				requestDetails,
			);
			return response.status(HttpStatus.OK).json({
				message: 'Request successfully updated',
				updatedRequest,
				success: true,
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Error: Request Details not found!',
				error: error,
				success: false,
			});
		}
	}

	@Post('/searchCriteria')
	async requestSerachCriteria(
		@Res() response,
		@Body() requestSearchCriteria: RequestSearchCriteriaDto,
	){
		try {
			const requests = await this.requestService.requestSearchCriteria(
				requestSearchCriteria
			);
			return response.status(HttpStatus.OK).json({
				message: 'Requests fetched successfully',
				requests,
				success: true,
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Error: Request Details not found!',
				error: error,
				success: false,
			});
		}
	}

	@Post('/dashboardPaymentStatusMetrics')
	async paymentStatusMetrics(
		@Res() response
	){
		try{
			const results = await this.requestService.getDashBoardPaymentStatusMetrics();
			return response.status(HttpStatus.OK).json({
				message : 'Payment status metrics fetched successfully',
				results,
				success : true
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Unable to Fetch Payment status metrics',
				error : error,
				success : false
			})
		}
	}

	@Post('/dashboardRFQStatusMetrics')
	async rfqStatusMetrics(
		@Res() response
	){
		try{
			const results = await this.requestService.getDashBoardRFQStatusMetrics();
			return response.status(HttpStatus.OK).json({
				message : 'RFQ status metrics fetched successfully',
				results,
				success : true
			});
		} catch (error) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: error.statusCode ? error.statusCode : 400,
				message: 'Unable to Fetch RFQ status metrics',
				error : error,
				success : false
			})
		}
	}

}
