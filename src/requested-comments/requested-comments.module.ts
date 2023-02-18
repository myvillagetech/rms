import { Module } from '@nestjs/common';
import { RequestedCommentsService } from './requested-comments.service';
import { RequestedCommentsController } from './requested-comments.controller';

@Module({
  controllers: [RequestedCommentsController],
  providers: [RequestedCommentsService]
})
export class RequestedCommentsModule {}
