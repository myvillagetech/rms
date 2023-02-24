import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RequestCommentSchemaCreator, RequestedCommentSchema } from './schemas/comment.schemas';
import { AuthModule } from 'src/auth/auth.module';
import { RequestCommentsController } from './comments.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.REQUEST_COMMENTS, schema: RequestCommentSchemaCreator },
    ]),
    AuthModule,
],
  controllers: [RequestCommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
