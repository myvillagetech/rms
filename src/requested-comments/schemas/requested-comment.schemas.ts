import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose  from 'mongoose';

export class RequestedComment {
    @Prop({ required: true, type: String })
    comments: string;
}
