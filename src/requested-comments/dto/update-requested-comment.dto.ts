import { PartialType } from '@nestjs/swagger';
import { CreateRequestedCommentDto } from './create-requested-comment.dto';

export class UpdateRequestedCommentDto extends PartialType(CreateRequestedCommentDto) {}
