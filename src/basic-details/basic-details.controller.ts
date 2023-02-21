import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicDetailsService } from './basic-details.service';
import { CreateBasicDetailsDto } from './dto/create-basic-detail.dto';
import { UpdateBasicDetailsDto } from './dto/update-basic-detail.dto';

@Controller('basic-details')
@ApiTags('basic-details')

export class BasicDetailsController {
  constructor(private readonly basicDetailsService: BasicDetailsService) {}

  @Post()
  async createBasicDetails(@Res() response, @Body() basicDetailsModel: CreateBasicDetailsDto) {
      try {
          const newUser = await this.basicDetailsService.createBasicDetails(basicDetailsModel);
          return response.status(HttpStatus.CREATED).json({
              message: 'basic details has been created successfully',
              success: true,
              newUser,
          });
      } catch (err) {
          return response.status(HttpStatus.BAD_REQUEST).json({
              statusCode: 400,
              message: 'Error: basic details not created!',
              error: err,
              success: false,
          });
      }
  }

  @Get()
  async getAllBasicDetails(@Res() response : any){
    try{
      let basicDetails  = await this.basicDetailsService.getallBasicDetails();
      return response.status(HttpStatus.CREATED).json({
        message: 'Basic details fetched successfully',
        success: true,
        basicDetails,
    });

    }catch(error){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Basic details not found!',
        error: error,
        success: false,
    });
    }
  }

  @Put('/:id')
  async updateUser(
      @Res() response,
      @Param('id') bisicDetailsId: string,
      @Body() basicDetailsModel: UpdateBasicDetailsDto,
  ) {
      try {
          const existingbasicDetails = await this.basicDetailsService.updateBasicDetails(
            bisicDetailsId,
            basicDetailsModel,
          );
          return response.status(HttpStatus.OK).json({
              message: 'basic deyails has been successfully updated',
              existingbasicDetails,
              success: true,
          });
      } catch (err) {
          return response
              .status(err.status)
              .json({ error: err.response, success: false });
      }
  }

  @Get('/:id')
    async getUser(@Res() response, @Param('id') bisicDetailsId: string) {
        try {
            const existingbasicDetails = await this.basicDetailsService.getBasicDetailsById(bisicDetailsId);
            return response.status(HttpStatus.OK).json({
                message: 'basic details found successfully',
                existingbasicDetails,
                success: true,
            });
        } catch (err) {
            return response
                .status(err.status)
                .json({ error: err.response, success: false });
        }
    }

    @Delete('/:id')
    async deleteUser(@Res() response, @Param('id') bisicDetailsId: string) {
        try {
            const deletedBasicDetails = await this.basicDetailsService.deleteBasicDetails(bisicDetailsId);
            return response.status(HttpStatus.OK).json({
                message: 'basic details deleted successfully',
                deletedBasicDetails,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

  
}
