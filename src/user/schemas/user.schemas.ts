import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
    timestamps: true,
})
export class UserSchemaCreator {
    @Prop(
        {
            required : true,
            unique : true,
            type : String
        }
    )
    email: string;

    @Prop( {
        required : true,
        type : String
    })
    name: string;

    @Prop( {
        required : true,
        type : String
    })
    phone: string

    @Prop( {
        required : true,
        type : String
    })
    password: string;

    @Prop({
        type: mongoose.Types.Map,
    })
    userAttributes: Object;

    @Prop()
    roles: string[];
}

export type UserDocument = UserSchemaCreator & Document;
export const UserSchema = SchemaFactory.createForClass(UserSchemaCreator);
