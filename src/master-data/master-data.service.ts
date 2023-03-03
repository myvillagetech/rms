import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddCompanyDataDto } from './dto/add-company.dto';
import { AddSalespersonDataDto } from './dto/sales-person/add-salesperson.dto';
import { UpdateSalespersonDataDto } from './dto/sales-person/update-salesperson.dto';
import { UpdateCompanyDataDto } from './dto/update-company.dto';
import { CompanyDocument } from './schemas/company.schema';
import { paymentRequestStatusDocument, quoteStatusDocument, RFQStatusDocument } from './schemas/master-data.schema';
import { SalesPersonDocument } from './schemas/sales-person.schema';

@Injectable()
export class MasterDataService {
  @InjectModel(MODEL_ENUMS.COMPANY) private companyModel: Model<CompanyDocument>;
  @InjectModel(MODEL_ENUMS.SALES_PERSON) private salesModel: Model<SalesPersonDocument>;
  @InjectModel(MODEL_ENUMS.RFQ_STATUS) private RFQStatusModel: Model<RFQStatusDocument>;
  @InjectModel(MODEL_ENUMS.PAYMENT_REQUEST_STATUS) private PaymentRequestStatusModel: Model<paymentRequestStatusDocument>;
  @InjectModel(MODEL_ENUMS.QUOTE_STATUS) private QuoteStatusModel: Model<quoteStatusDocument>;
  constructor(
    private readonly authService: AuthService,
) {}

  async addCompany(addCompanyData: AddCompanyDataDto, tokenHeader: string,):Promise<any> {
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);
    const newCompanyData = {
          ...addCompanyData,
          addedBy: {
            id : decodedToken._id,
            name : decodedToken.name
          },
        }
          const data = await new this.companyModel(newCompanyData);
          return data.save();
  }

  async getAllCompanies(){
    const companies = await this.companyModel.find();
    if(companies && companies.length !==0){
      return companies
    }
    throw new NotFoundException(`Companies not found`);
  }

  async getCompanyById(companyId : string):Promise<any>{
    const company = await this.companyModel.findById(companyId);
    if(!company ){
      throw new NotFoundException('company  Not Found');
    }
    return company;
  }

  async updateCompanyId(companyId : string, companyIdtDate : UpdateCompanyDataDto):Promise<any>{
    const company = await this.companyModel.findByIdAndUpdate(companyId, companyIdtDate, {new : true});
    if(!company ){
      throw new NotFoundException('company Not Found');
    }
    return company;

  }

  async deleteCompanyById(companyId : string):Promise<any>{
    const company = await this.companyModel.findByIdAndDelete(companyId);
    if(!company ){
      throw new NotFoundException('company Not Found');
    }
    return company;
  }

// salesperson 

  async addSalesperson(addSalesPersonData: AddSalespersonDataDto, tokenHeader: string,):Promise<any> {
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);
    const newSalespersonData = {
          ...addSalesPersonData,
          addedBy: {
            id : decodedToken._id,
            name : decodedToken.name
          },
        }
          const data = await new this.salesModel(newSalespersonData);
          return data.save();
  }

  async getAllSalespersons(){
    const salespersons = await this.salesModel.find();
    if(salespersons && salespersons.length !==0){
      return salespersons
    }
    throw new NotFoundException(`salespersons not found`);
  }

  async getSalespersonById(salespersonId : string):Promise<any>{
    const salesperson = await this.salesModel.findById(salespersonId);
    if(!salesperson ){
      throw new NotFoundException('salesperson  Not Found');
    }
    return salesperson;
  }

  async updateSalespersonById(salespersonId : string, salespersonIdtDate : UpdateSalespersonDataDto):Promise<any>{
    const salesperson = await this.salesModel.findByIdAndUpdate(salespersonId, salespersonIdtDate, {new : true});
    if(!salesperson ){
      throw new NotFoundException('salesperson Not Found');
    }
    return salesperson;
  }

  async deleteSalespersonById(salespersonId : string):Promise<any>{
    const salesperson = await this.salesModel.findByIdAndDelete(salespersonId);
    if(!salesperson ){
      throw new NotFoundException('salesperson Not Found');
    }
    return salesperson;
  }

  async getAllMasterData(): Promise<any> {
    const RFQStatusData = await this.RFQStatusModel.find();
    const quoteStatusData = await this.QuoteStatusModel.find();
    const paymentStatusData = await this.PaymentRequestStatusModel.find();
    const MasterData={
      RFQStatusData:RFQStatusData,
      quoteStatus:quoteStatusData,
      paymentRequestStatus:paymentStatusData
    }
    return MasterData
}

}
