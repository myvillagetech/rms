import { SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { RequestCommentSchemaCreator } from "../schemas/comment.schemas";

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
    requstId : string
}
export type RequestCommentsDocument = AddCommentDto & Document;
export const RequestedCommentSchema =
    SchemaFactory.createForClass(RequestCommentSchemaCreator);

