import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateRequestedCommentDto } from './create-requested-comment.dto';

export class UpdateRequestedCommentDto extends PartialType(CreateRequestedCommentDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    comments: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    basicDetailsId : string
}
