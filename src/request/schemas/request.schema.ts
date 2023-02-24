import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class RequestSchemaCreator {
    @Prop({
        required: true,
        type: String
    })
    title: string;

    @Prop({
        required: true,
        type: String
    })
    persons: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    rfqStatus: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    quoteStatus: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    paymentStatus: string;

    @Prop({ 
        required: true, 
        type: String 
    })
    quoteSubmittedTo: string;

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
