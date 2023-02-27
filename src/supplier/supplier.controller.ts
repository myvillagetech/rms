import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Res, Headers } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { AddSupplierDto } from './dto/add-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { ApiBearerAuth, ApiParam, ApiTags,  } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('supplier')
@ApiTags('requested-suppliers')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
      '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  addSupplier(
    @Body() suppliersDetails: AddSupplierDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newsupplier = this.supplierService.addSupplier(suppliersDetails, authHeader);
      return response.status(HttpStatus.CREATED).json({
        message: 'supplier has been created successfully',
        success: true,
        newsupplier,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to create supplier',
        error: error,
        success: false,
      });
    }
  }

  @Get('/:supplierId')
  async getsupplierById(
    @Res() response: any,
    @Param('supplierId') supplierId : string) {
    try {
      const supplier = await this.supplierService.getsupplierById(supplierId);
      return response.status(HttpStatus.CREATED).json({
        message: 'supplier fetched successfully',
        success: true,
        supplier,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch supplier',
        error: error,
        success: false,
      });
    }
  }

  @Get('/request/:requestId')
 async getsupplierByRequestId(
    @Res() response: any,
    @Param('requestId') requestId : string) {
    try {
      const supplier = await this.supplierService.getsuppliersByRequestId(requestId);
      return response.status(HttpStatus.OK).json({
        message: 'suppliers fetched successfully',
        success: true,
        supplier,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch suppliers',
        error: error,
        success: false,
      });
    }
  }

  @Put('/:supplierId')
  async updateSupplierById(
    @Res() response: any,
    @Param('supplierId') supplierId : string,
    @Body() supplierData : UpdateSupplierDto) {
    try {
      const supplier = await this.supplierService.updateSupplierById(supplierId,supplierData);
      return response.status(HttpStatus.OK).json({
        message: 'supplier updated successfully',
        success: true,
        supplier,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to update supplier',
        error: error,
        success: false,
      });
    }
  }

  @Delete('/:supplierId')
  async deleteSupplierById(
    @Res() response: any,
    @Param('supplierId') supplierId : string) {
    try {
      const supplier = await this.supplierService.deleteSupplierById(supplierId);
      return response.status(HttpStatus.OK).json({
        message: 'supplier deleted successfully',
        success: true,
        supplier,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to delete supplier',
        error: error,
        success: false,
      });
    }
  }

}
