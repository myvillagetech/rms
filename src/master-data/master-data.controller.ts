import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards, Res, HttpStatus, Put } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { AddCompanyDataDto } from './dto/add-companydata.dto';
import { UpdateCompanyDataDto } from './dto/update-company.data.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { AddSalespersonDataDto } from './dto/sales-person/add-salesdata.dto';

@Controller('master-data')
@ApiTags('master-data')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) { }

  @Post('/company')
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
      '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  async addCompany(
    @Body() addCompanyDataDto: AddCompanyDataDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newCompany = await this.masterDataService.addCompany(addCompanyDataDto, authHeader);
      return response.status(HttpStatus.CREATED).json({
        message: 'company has been created successfully',
        success: true,
        newCompany,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to create company',
        error: error,
        success: false,
      });
    }
  }

  @Get('/company')
  async getAllCompanies(
    @Res() response: any) {
    try {
      const companies = await this.masterDataService.getAllCompanies();
      return response.status(HttpStatus.OK).json({
        message: 'companies fetched successfully',
        success: true,
        companies,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch companies',
        error: error,
        success: false,
      });
    }
  }

  @Get('/company/:companyId')
  async getCompanyBYId(
    @Res() response: any,
    @Param('companyId') companyId : string){
    try {
      const company = await this.masterDataService.getCompanyById(companyId);
      return response.status(HttpStatus.OK).json({
        message: 'company fetched successfully',
        success: true,
        company,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch company',
        error: error,
        success: false,
      });
    }
  }

  @Put('/company/:companyId')
  async updateCompanyById(
    @Res() response: any,
    @Param('companyId') companyId : string,
    @Body() companyData : UpdateCompanyDataDto) {
    try {
      const company = this.masterDataService.updateCompanyId(companyId,companyData);
      return  await response.status(HttpStatus.CREATED).json({
        message: 'company updated successfully',
        success: true,
        company,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch company',
        error: error,
        success: false,
      });
    }
  }

  @Delete('/company/:companyId')
  async deleteCompanyById(
    @Res() response: any,
    @Param('companyId') companyId : string) {
    try {
      const company = await this.masterDataService.deleteCompanyById(companyId);
      return response.status(HttpStatus.OK).json({
        message: 'company deleted successfully',
        success: true,
        company,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to delete company',
        error: error,
        success: false,
      });
    }
  }

  @Post('/salesperson')
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
      '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  async addSalesperson(
    @Body() addSalespersonDataDto: AddSalespersonDataDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newSalesperson = await this.masterDataService.addSalesperson(addSalespersonDataDto, authHeader);
      return response.status(HttpStatus.CREATED).json({
        message: 'Salesperson has been added successfully',
        success: true,
        newSalesperson,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to create Salesperson',
        error: error,
        success: false,
      });
    }
  }

  @Get('/salesperson')
  async getAllsalespersons(
    @Res() response: any) {
    try {
      const salespersons = await this.masterDataService.getAllSalespersons();
      return response.status(HttpStatus.OK).json({
        message: 'salespersons fetched successfully',
        success: true,
        salespersons,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch salespersons',
        error: error,
        success: false,
      });
    }
  }



}

  
