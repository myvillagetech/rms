import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { AddCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(AddCommentDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    comments: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    requestId : string
}
