import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestedCommentsService } from './requested-comments.service';
import { CreateRequestedCommentDto } from './dto/create-requested-comment.dto';
import { UpdateRequestedCommentDto } from './dto/update-requested-comment.dto';

@Controller('requested-comments')
export class RequestedCommentsController {
  constructor(private readonly requestedCommentsService: RequestedCommentsService) {}

  @Post()
  create(@Body() createRequestedCommentDto: CreateRequestedCommentDto) {
    return this.requestedCommentsService.create(createRequestedCommentDto);
  }

  @Get()
  findAll() {
    return this.requestedCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestedCommentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestedCommentDto: UpdateRequestedCommentDto) {
    return this.requestedCommentsService.update(+id, updateRequestedCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestedCommentsService.remove(+id);
  }
}
