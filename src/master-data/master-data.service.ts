import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddCompanyDataDto } from './dto/add-companydata.dto';
import { UpdateCompanyDataDto } from './dto/update-company.data.dto';
import { CompanyDocument } from './schemas/company.schema';

@Injectable()
export class MasterDataService {
  @InjectModel(MODEL_ENUMS.COMPANY) private companyModel: Model<CompanyDocument>;
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


  // async addComment( commentData : AddCommentDto, tokenHeader: string,):Promise<any>{
  //   const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

  //   const newCommentData = {
  //     ...commentData,
  //     addedBy: {
  //       id : decodedToken._id,
  //       name : decodedToken.name
  //     },
  //   }

  //   const data = await new this.commentModel(newCommentData);
  //   return data.save();
  // }
}
