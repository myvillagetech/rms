import { SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddCommentDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    comment: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    requestId : string
}

