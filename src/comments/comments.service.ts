import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsDocument } from './schemas/comment.schemas';

@Injectable()
export class CommentsService {
  @InjectModel(MODEL_ENUMS.COMMENTS) private commentModel: Model<CommentsDocument>;
  constructor(
    private readonly authService: AuthService,
) {} 

  async addComment( commentData : AddCommentDto, tokenHeader: string,):Promise<any>{
    const decodedToken: any = this.authService.getDecodedToken(tokenHeader);

    const newCommentData = {
      ...commentData,
      addedBy: {
        id : decodedToken._id,
        name : decodedToken.name
      },
    }

    const data = await new this.commentModel(newCommentData);
    return data.save();
  }

  async getAllComments():Promise<any>{
    const comments = await this.commentModel.find();
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async getCommentById(commentId : string):Promise<any>{
    const comment = await this.commentModel.findById(commentId);
    if(!comment ){
      throw new NotFoundException('Comment  Not Found');
    }
    return comment;
  }

  async getCommentsByRequestId(requestId : string):Promise<any>{
    const comments = await this.commentModel.find({requestId : requestId});
    if(!comments && comments.length === 0){
      throw new NotFoundException('Comments NOt Found');
    }
    return comments;
  }

  async updateCommentById(commentId : string, commentDate : UpdateCommentDto):Promise<any>{
    const comment = await this.commentModel.findByIdAndUpdate(commentId, commentDate, {new : true});
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }

  async deleteCommentById(commentId : string):Promise<any>{
    const comment = await this.commentModel.findByIdAndDelete(commentId);
    if(!comment ){
      throw new NotFoundException('Comment Not Found');
    }
    return comment;
  }
}
