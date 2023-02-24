import { Controller, Get, Post, Body, Patch, Param, Delete,Headers, UseGuards, Res, HttpStatus, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { CommentsService } from './comments.service';
import { AddCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('request-comments')
@ApiTags('request-comments')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class RequestCommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post()
  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
      '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  async addComment(
    @Body() addCommentDto: AddCommentDto,
    @Res() response: any,
    @Headers('Authorization') authHeader: string,) {
    try {
      const newComment = await this.commentsService.addComment(addCommentDto, authHeader);
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
  async getAllComments(
    @Res() response: any) {
    try {
      const comments = await this.commentsService.getAllComments();
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
  async getCommentById(
    @Res() response: any,
    @Param('commentId') commentId : string) {
    try {
      const comment = await this.commentsService.getCommentById(commentId);
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

  @Get('requestId/:requestId')
  async getCommentByUserId(
    @Res() response: any,
    @Param('requestId') requestId : string) {
    try {
      const comment = await this.commentsService.getCommentsByRequestId(requestId);
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
    @Body() commentData : UpdateCommentDto) {
    try {
      const comment = this.commentsService.updateCommentById(commentId,commentData);
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
