import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { RequestSchemaCreator } from "src/request/schemas/request.schema";

@Schema({
    timestamps: true,
})
export class RequestCommentSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
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

export type RequestedCommentsDocument = RequestCommentSchemaCreator & Document;
export const RequestedCommentSchema =SchemaFactory.createForClass(RequestCommentSchemaCreator);


