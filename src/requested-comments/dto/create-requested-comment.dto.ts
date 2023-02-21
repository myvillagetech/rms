import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/constants/roles.constants';

export class CreateRequestedCommentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    comments: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    basicDetailsId : string
}
