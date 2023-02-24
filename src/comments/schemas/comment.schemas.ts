import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { RequestSchemaCreator } from "src/request/schemas/request.schema";

@Schema({
    timestamps: true,
})
export class CommentSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
        required : true
    })
    requestId: RequestSchemaCreator;

    @Prop({
        required: true,
        type: String,
    })
    comment: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    addedBy: string;
}

export type CommentsDocument = CommentSchemaCreator & Document;
export const CommentSchema = SchemaFactory.createForClass(CommentSchemaCreator);


