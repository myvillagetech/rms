
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  mongoose  from 'mongoose';

@Schema({
    timestamps: true,
})
export class Attachment {
    @Prop({})
    name: string;
    @Prop({})
    size: string;
    @Prop({})
    path: string;
}

export const AttachmentSchema = SchemaFactory.createForClass(Attachment)
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

  @Prop({ type:[AttachmentSchema] })
  fileName: Attachment[];

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  messagetoSmitha: string;

  @Prop({ required: true, type: String })
  messagetoPrem: string;

  @Prop({ required: true, type: String })
  nextAction: string;

  @Prop({ required: true, type: String })
  remarks: string;

  @Prop({ required: true, type: String })
  suppliersWhoProvidedQuoteTo: string;

  @Prop({ required: true, type: String })
  supplierName: string;

  @Prop({ required: true, type: String })
  contactName: string;

  @Prop({ required: true, type: String })
  email: string;

  @Prop({ required: true, type: String })
  phone: string;

  @Prop({ required: true, type: String })
  price: string;

  @Prop({ required: true, type: String })
  sAndH: string;

  @Prop({ required: true, type: String })
  cc: string;

  @Prop({ required: true, type: String })
  s_Total: string;

  @Prop({ required: true, type: String })
  leadTimeWK: string;

  @Prop({ required: true, type: Boolean, default:false })
  avalability: Boolean;

  @Prop({ required: true, type: String })
  totalcost: string;

  @Prop({ required: true, type: Boolean, default:false })
  sup: Boolean;

  @Prop({ required: true, type: String })
  shipCostMax: string;

  @Prop({ required: true, type: String })
  shipCostMin: string;

  @Prop({ required: true, type: String })
  waitingOn: string;

  @Prop({ required: true, type: String })
  profit: string;

  @Prop({ required: true, type: String })
  profitpercentage: string

}
