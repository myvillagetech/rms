import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { AddCompanyDataDto } from './dto/add-companydata.dto';
import { UpdateCompanyDataDto } from './dto/update-company.data.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';

@Controller('master-data')
@ApiTags('master-data')
@ApiBearerAuth('master-data')
@UseGuards(JwtAuthGuard)
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) { }

  @Post()
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
}


  // @Get()
  // findAll() {
  //   return this.masterDataService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.masterDataService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMasterDatumDto: UpdateCompanyDataDto) {
  //   return this.masterDataService.update(+id, updateMasterDatumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.masterDataService.remove(+id);
  // }
// }
