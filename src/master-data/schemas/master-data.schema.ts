import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})
export class RFQStatusSchemaCreator {
    @Prop({
        required: true,
        type: String,
    })
    status: string;
}
export type RFQStatusDocument = RFQStatusSchemaCreator & Document;
export const RFQStatusSchema = SchemaFactory.createForClass(
    RFQStatusSchemaCreator,
);

@Schema({
    timestamps: true,
})
export class paymentRequestStatusSchemaCreator {
    @Prop({
        required: true,
        type: String,
    })
    status: string;
}
export type paymentRequestStatusDocument = paymentRequestStatusSchemaCreator &
    Document;
export const paymentRequestStatusSchema = SchemaFactory.createForClass(
    paymentRequestStatusSchemaCreator,
);

@Schema({
    timestamps: true,
})
export class quoteStatusSchemaCreator {
    @Prop({
        required: true,
        type: String,
    })
    status: string;
}
export type quoteStatusDocument = quoteStatusSchemaCreator & Document;
export const quoteStatusStatusSchema = SchemaFactory.createForClass(
    quoteStatusSchemaCreator,
);
