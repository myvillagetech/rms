import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { MODEL_ENUMS } from "src/shared/enums/model.enum";
import { CompanySchemaCreator } from "./company.schema";

@Schema({
    timestamps: true,
})

export class SalesPersonSchemaCreator {
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: MODEL_ENUMS.COMPANY,
    })
    companyId:CompanySchemaCreator ;
    @Prop({
        required: true,
        type: String,
    })
    salesperson: string;
}

export type SalesPersonDocument = SalesPersonSchemaCreator & Document;
export const SalesPersonSchema = SchemaFactory.createForClass(SalesPersonSchemaCreator);