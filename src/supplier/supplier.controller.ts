import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Res, Headers } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
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
  createsupplier(
    @Body() createRequestedsupplierDto: CreateSupplierDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newsupplier = this.supplierService.createsupplier(createRequestedsupplierDto, authHeader);
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

  @Get()
  getAllsuppliers(
    @Res() response: any) {
    try {
      const suppliers = this.supplierService.getAllsuppliers();
      return response.status(HttpStatus.CREATED).json({
        message: 'suppliers fetched successfully',
        success: true,
        suppliers,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch suppliers',
        error: error,
        success: false,
      });
    }
  }

  @Get('/:supplierId')
  getsupplierById(
    @Res() response: any,
    @Param('supplierId') supplierId : string) {
    try {
      const supplier = this.supplierService.getsupplierById(supplierId);
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

  @Get('/:userId')
  getsupplierByUserId(
    @Res() response: any,
    @Param('userId') userId : string) {
    try {
      const supplier = this.supplierService.getsuppliersByuserId(userId);
      return response.status(HttpStatus.CREATED).json({
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
  updatesupplierById(
    @Res() response: any,
    @Param('supplierId') supplierId : string,
    @Body() supplierData : UpdateSupplierDto) {
    try {
      const supplier = this.supplierService.updatesupplierById(supplierId,supplierData);
      return response.status(HttpStatus.CREATED).json({
        message: 'supplier updated successfully',
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

 
}
