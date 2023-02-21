import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { RequestedCommentsService } from './requested-comments.service';
import { CreateRequestedCommentDto } from './dto/create-requested-comment.dto';
import { UpdateRequestedCommentDto } from './dto/update-requested-comment.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { Headers, Put, Res, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';

@Controller('requested-comments')
@ApiTags('requested-comments')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class RequestedCommentsController {
  constructor(private readonly requestedCommentsService: RequestedCommentsService) { }

  @Post()
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
      '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  createComment(
    @Body() createRequestedCommentDto: CreateRequestedCommentDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newComment = this.requestedCommentsService.createComment(createRequestedCommentDto, authHeader);
      return response.status(HttpStatus.CREATED).json({
        message: 'comment has been created successfully',
        success: true,
        newComment,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to create comment',
        error: error,
        success: false,
      });
    }
  }

  @Get()
  getAllComments(
    @Res() response: any) {
    try {
      const comments = this.requestedCommentsService.getAllComments();
      return response.status(HttpStatus.CREATED).json({
        message: 'comments fetched successfully',
        success: true,
        comments,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch comments',
        error: error,
        success: false,
      });
    }
  }

  @Get('/:commentId')
  getCommentById(
    @Res() response: any,
    @Param('commentId') commentId : string) {
    try {
      const comment = this.requestedCommentsService.getCommentById(commentId);
      return response.status(HttpStatus.CREATED).json({
        message: 'comment fetched successfully',
        success: true,
        comment,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch comment',
        error: error,
        success: false,
      });
    }
  }

  @Get('/:userId')
  getCommentByUserId(
    @Res() response: any,
    @Param('userId') userId : string) {
    try {
      const comment = this.requestedCommentsService.getCommentsByuserId(userId);
      return response.status(HttpStatus.CREATED).json({
        message: 'comments fetched successfully',
        success: true,
        comment,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch comments',
        error: error,
        success: false,
      });
    }
  }

  @Put('/:commentId')
  updateCommentById(
    @Res() response: any,
    @Param('commentId') commentId : string,
    @Body() commentData : UpdateRequestedCommentDto) {
    try {
      const comment = this.requestedCommentsService.updateCommentById(commentId,commentData);
      return response.status(HttpStatus.CREATED).json({
        message: 'comment updated successfully',
        success: true,
        comment,
      });
    } catch (error) {
      return response.status(error.status).json({
        message: 'Unable to fetch comment',
        error: error,
        success: false,
      });
    }
  }
}
