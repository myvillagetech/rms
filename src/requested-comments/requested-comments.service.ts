import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateRequestedCommentDto } from './dto/create-requested-comment.dto';
import { UpdateRequestedCommentDto } from './dto/update-requested-comment.dto';
import { RequestedCommentsDocument } from './schemas/requested-comment.schemas';

@Injectable()
export class RequestedCommentsService {
  @InjectModel(MODEL_ENUMS.REQUEST_COMMENTS) private requestedCommentsModel: Model<RequestedCommentsDocument>;
  constructor(
    private readonly authService: AuthService,
) {} 

  async createComment( commentData : CreateRequestedCommentDto, tokenHeader: string,):Promise<any>{
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

    const newCommentData = {
      ...commentData,
      createdBy: decodedToken._id,
      createdByName: decodedToken.name,
    }

    const data = await new this.requestedCommentsModel(newCommentData);
    return data.save();
  }

  async getAllComments():Promise<any>{
    const comments = await this.requestedCommentsModel.find();
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async getCommentById(commentId : string):Promise<any>{
    const comment = await this.requestedCommentsModel.findById(commentId);
    if(!comment ){
      throw new NotFoundException('Comment  Not Found');
    }
    return comment;
  }

  async getCommentsByuserId(userId : string):Promise<any>{
    const comments = await this.requestedCommentsModel.find({createdBy : userId});
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async updateCommentById(commentId : string, commentDate : UpdateRequestedCommentDto):Promise<any>{
    const comment = await this.requestedCommentsModel.findByIdAndUpdate(commentId, commentDate, {new : true});
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }

  async deleteCommentById(commentId : string):Promise<any>{
    const comment = await this.requestedCommentsModel.findByIdAndDelete(commentId);
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }
}
