import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose  from 'mongoose';

@Schema({
    timestamps: true,
})
export class RequestedComments {

    @Prop({ required: true, type: String })
    basicDetailsId: string;

    @Prop({ required: true, type: String })
    comments: string;

    @Prop({ required: true, type: String })
    createdBy: string;

    @Prop({ required: true, type: String })
    createdByName: string;

}

export type RequestedCommentsDocument = RequestedComments & Document;
export const RequestedCommentSchema = SchemaFactory.createForClass(RequestedComments); 
