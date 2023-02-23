import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddCommentDto, RequestCommentsDocument } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  @InjectModel(MODEL_ENUMS.REQUEST_COMMENTS) private requestCommentsModel: Model<RequestCommentsDocument>;
  constructor(
    private readonly authService: AuthService,
) {} 

  async createComment( commentData : AddCommentDto, tokenHeader: string,):Promise<any>{
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

    const newCommentData = {
      ...commentData,
      addedBy: decodedToken._id,
    }

    const data = await new this.requestCommentsModel(newCommentData);
    return data.save();
  }

  async getAllComments():Promise<any>{
    const comments = await this.requestCommentsModel.find();
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async getCommentById(commentId : string):Promise<any>{
    const comment = await this.requestCommentsModel.findById(commentId);
    if(!comment ){
      throw new NotFoundException('Comment  Not Found');
    }
    return comment;
  }

  async getCommentsByuserId(userId : string):Promise<any>{
    const comments = await this.requestCommentsModel.find({createdBy : userId});
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async updateCommentById(commentId : string, commentDate : UpdateCommentDto):Promise<any>{
    const comment = await this.requestCommentsModel.findByIdAndUpdate(commentId, commentDate, {new : true});
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }

  async deleteCommentById(commentId : string):Promise<any>{
    const comment = await this.requestCommentsModel.findByIdAndDelete(commentId);
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }
}
