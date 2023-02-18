import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly phone : string
    
    @ApiProperty({
        type: Object
    })
    readonly userAttributes : Object
}
