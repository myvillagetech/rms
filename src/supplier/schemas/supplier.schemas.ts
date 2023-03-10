import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { RequestSchemaCreator } from 'src/request/schemas/request.schema';

@Schema({
    timestamps: true,
}) 

export class Supplier {
    @Prop({ required: true, type: String })
    supplierName: string;

    @Prop({ required: true, type: Boolean, default: false })
    avalability: boolean;

    @Prop({ required: true, type: Boolean, default: false })
    preferredSuplier: boolean;

    @Prop({ required: true, type: String })
    contactName: string;

    @Prop({ required: true, type: String })
    email: string;

    @Prop({ required: true, type: String })
    phone: string;

    @Prop({ required: true, type: String })
    price: string;

    @Prop({ required: true, type: String })
    SandH: string;

    @Prop({ required: true, type: String })
    cc: string;

    @Prop({ required: true, type: String })
    sTotal: string;

    @Prop({ required: true, type: String })
    leadTimeWK: string;

    @Prop({ required: true, type: String })
    shipCostMax: string;

    @Prop({ required: true, type: String })
    shipCostMin: string;

    @Prop({ required: true, type: String })
    addedBy: string;

    @Prop({ required: true, type: String })
    totalCost: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'request',
    })
    requestId: RequestSchemaCreator;
}

export type SupplierDocument = Supplier & Document;
export const SupplierSchema = SchemaFactory.createForClass(Supplier);
