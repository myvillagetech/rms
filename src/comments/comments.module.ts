import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RequestedCommentSchema } from './schemas/comment.schemas';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.REQUEST_COMMENTS, schema: RequestedCommentSchema },
    ]),
    AuthModule,
],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
