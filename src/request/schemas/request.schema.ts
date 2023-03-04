import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types } from "mongoose";
import { paymentRequestStatusSchemaCreator, quoteStatusSchemaCreator, RFQStatusSchemaCreator } from "src/master-data/schemas/master-data.schema";
import { SalesPersonSchemaCreator } from "src/master-data/schemas/sales-person.schema";
import { MODEL_ENUMS } from "src/shared/enums/model.enum";
@Schema()
export class RequestSchemaCreator {
    @Prop({
        required: true,
        type: String
    })
    title: string;

    @Prop({
        type: Types.ObjectId,
        ref :  MODEL_ENUMS.SALES_PERSON
    })
    persons: SalesPersonSchemaCreator;

    @Prop({ 
        type: Types.ObjectId,
        ref : MODEL_ENUMS.RFQ_STATUS
    })
    rfqStatus: RFQStatusSchemaCreator;

    @Prop({ 
        type: Types.ObjectId,
        ref : MODEL_ENUMS.QUOTE_STATUS 
    })
    quoteStatus: quoteStatusSchemaCreator;

    @Prop({ 
        type: Types.ObjectId,
        ref : MODEL_ENUMS.PAYMENT_REQUEST_STATUS 
    })
    paymentStatus: paymentRequestStatusSchemaCreator;

    @Prop({ 
        type: Types.ObjectId,
        ref : MODEL_ENUMS.SALES_PERSON 
    })
    quoteSubmittedTo: SalesPersonSchemaCreator;

    @Prop({ required: true, type: String })
    rfqReceivedDate: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    quoteAmount: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    exw: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    quoteNo: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    paymentReceivedDate: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    quoteSubDate: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    invoiceAmount: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    invoiceDate: string;

    @Prop({ 
        required: true, 
        type: String
    })
    invoiceNo: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    description: string;
}

export type RequestDocument = RequestSchemaCreator & Document;
export const RequestSchema = SchemaFactory.createForClass(RequestSchemaCreator);
