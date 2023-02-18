
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose  from 'mongoose';

@Schema({
    timestamps: true,
})


export class BasicDetail  {
  @Prop({ required: true, type: String })
  persons: string;

  @Prop({ required: true, type: String })
  rfqStatus: string;

  @Prop({ required: true, type: String })
  quoteStatus: string;

  @Prop({ required: true, type: String })
  paymentStatus: string;

  @Prop({ required: true, type: String })
  quoteSubmittedTo: string;

  @Prop({ required: true, type: String })
  rfqReceivedDate: string;

  @Prop({ required: true, type: String })
  quoteAmount: string;

  @Prop({ required: true, type: String })
  exw: string;

  @Prop({ required: true, type: String })
  quoteNo: string;

  @Prop({ required: true, type: String })
  paymentReceivedDate: string;

  @Prop({ required: true, type: String })
  quoteSubDate: string;

  @Prop({ required: true, type: String })
  maxCost: string;

  @Prop({ required: true, type: String })
  invoiceAmount: string;

  @Prop({ required: true, type: String })
  invoiceDate: string;

  @Prop({ required: true, type: String })
  invoiceNo: string;

  @Prop({ required: true, type: String })
  description: string;
}
