import { Module } from '@nestjs/common';
import { RequestedCommentsService } from './requested-comments.service';
import { RequestedCommentsController } from './requested-comments.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RequestedCommentSchema } from './schemas/requested-comment.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.REQUESTED_COMMENTS, schema: RequestedCommentSchema },
    ]),
    AuthModule,
],
  controllers: [RequestedCommentsController],
  providers: [RequestedCommentsService]
})
export class RequestedCommentsModule {}
