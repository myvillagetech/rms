import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Supplier {

    @Prop({ required: true, type: String })
    supplierName: string;
    @Prop({ required: true, type: Boolean, default: false })
    avalability: boolean;
    @Prop({ required: true, type: Boolean, default: false })
    sup: boolean;
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
    createdBy: string;

    @Prop({ required: true, type: String })
    createdByName: string;

    @Prop({ required: true, type: String })
    basicDetailsId: string;
}

export type SupplierDocument = Supplier & Document;
export const SupplierSchema = SchemaFactory.createForClass(Supplier); 
