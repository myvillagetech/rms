import { Injectable } from '@nestjs/common';
import { HttpException, NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBasicDetailsDto } from './dto/create-basic-detail.dto';
import { UpdateBasicDetailsDto } from './dto/update-basic-detail.dto';
import { BasicDetailsDocument } from './schemas/basic-detail.schemas';

@Injectable()
export class BasicDetailsService {
@InjectModel(MODEL_ENUMS.BASIC_DETAILS) private basicDetailsModel: Model<BasicDetailsDocument>;

  async createBasicDetails(createBasicDetailsDto: CreateBasicDetailsDto) {
    const newbasicDetailsModel = await new this.basicDetailsModel(createBasicDetailsDto);
    return newbasicDetailsModel.save();
  
  }

  async getallBasicDetails(){
    const basicDetails = await this.basicDetailsModel.find();
    if(basicDetails && basicDetails.length !==0){
      return basicDetails
    }
    throw new NotFoundException(`basic details not found`);

  }

  async updateBasicDetails(basicDetailsId: string, updateBasicDetailsDto: UpdateBasicDetailsDto,
    ): Promise<BasicDetailsDocument> {
      const basicDetails = await this.basicDetailsModel.findByIdAndUpdate(
        basicDetailsId,
        updateBasicDetailsDto,
        { new: true },
      );
      if (!basicDetails) {
        throw new NotFoundException(`basicDetails #${basicDetailsId} not found`);
      }
      return basicDetails;
  }

  async deleteBasicDetails(basicDetailsId: string){
    const basicDetails = await this.basicDetailsModel.findByIdAndDelete(basicDetailsId);

    if (!basicDetails) {
      throw new NotFoundException(`basicDetails #${basicDetailsId} not found`);
    }
    return basicDetails;
  }

  async getBasicDetailsById(basicDetailsId : string){
    const basicDetails = await this.basicDetailsModel.findById(basicDetailsId);

    if (!basicDetails) {
      throw new NotFoundException(`basicDetails #${basicDetailsId} not found`);
    }
    return basicDetails;

  }
  

  
}
