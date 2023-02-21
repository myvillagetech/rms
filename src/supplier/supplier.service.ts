import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierDocument } from './schemas/supplier.schemas';

@Injectable()
export class SupplierService {
  @InjectModel(MODEL_ENUMS.SUPPLIERS) private suppliersModel: Model<SupplierDocument>
  constructor(
    private readonly authService: AuthService,
  ) { }

  async createsupplier( supplierData : CreateSupplierDto, tokenHeader: string,):Promise<any>{
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

    const newsupplierData = {
      ...supplierData,
      createdBy: decodedToken._id,
      createdByName: decodedToken.name,
    }

    const data = await new this.suppliersModel(newsupplierData);
    return data.save();
  }

  async getAllsuppliers():Promise<any>{
    const suppliers = await this.suppliersModel.find();
    if(!suppliers && suppliers.length === 0){
      throw new NotFoundException('suppliers NOt Found');
    }
    return suppliers;
  }

  async getsupplierById(supplierId : string):Promise<any>{
    const supplier = await this.suppliersModel.findById(supplierId);
    if(!supplier ){
      throw new NotFoundException('supplier  Not Found');
    }
    return supplier;
  }

  async getsuppliersByuserId(userId : string):Promise<any>{
    const suppliers = await this.suppliersModel.find({createdBy : userId});
    if(!suppliers && suppliers.length === 0){
      throw new NotFoundException('suppliers NOt Found');
    }
    return suppliers;
  }

  async updatesupplierById(supplierId : string, supplierDate : UpdateSupplierDto):Promise<any>{
    const supplier = await this.suppliersModel.findByIdAndUpdate(supplierId, supplierDate, {new : true});
    if(!supplier ){
      throw new NotFoundException('supplier Not Found');
    }
    return supplier;
  }

  async deletesupplierById(supplierId : string):Promise<any>{
    const supplier = await this.suppliersModel.findByIdAndDelete(supplierId);
    if(!supplier ){
      throw new NotFoundException('supplier Not Found');
    }
    return supplier;
  }

}
