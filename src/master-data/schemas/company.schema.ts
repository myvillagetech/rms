import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
     timestamps: true,
})
export class CompanySchemaCreator {
    @Prop({
        required: true,
        type: String,
    })
    name: string;
}

export type CompanyDocument = CompanySchemaCreator & Document;
export const CompanySchema = SchemaFactory.createForClass(CompanySchemaCreator);