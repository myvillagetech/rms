import { Injectable } from '@nestjs/common';
import { CreateRequestedCommentDto } from './dto/create-requested-comment.dto';
import { UpdateRequestedCommentDto } from './dto/update-requested-comment.dto';

@Injectable()
export class RequestedCommentsService {
  create(createRequestedCommentDto: CreateRequestedCommentDto) {
    return 'This action adds a new requestedComment';
  }

  findAll() {
    return `This action returns all requestedComments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestedComment`;
  }

  update(id: number, updateRequestedCommentDto: UpdateRequestedCommentDto) {
    return `This action updates a #${id} requestedComment`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestedComment`;
  }
}
