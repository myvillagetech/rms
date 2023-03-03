import { Module } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { MasterDataController } from './master-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema, CompanySchemaCreator } from './schemas/company.schema';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AuthModule } from 'src/auth/auth.module';
import { SalesPersonSchema } from './schemas/sales-person.schema';
import { paymentRequestStatusSchema, quoteStatusStatusSchema, RFQStatusSchema } from './schemas/master-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name:MODEL_ENUMS.COMPANY , schema:CompanySchema },
        { name:MODEL_ENUMS.SALES_PERSON , schema:SalesPersonSchema },
        { name:MODEL_ENUMS.RFQ_STATUS , schema:RFQStatusSchema },
        { name:MODEL_ENUMS.PAYMENT_REQUEST_STATUS , schema:paymentRequestStatusSchema },
        { name:MODEL_ENUMS.QUOTE_STATUS , schema:quoteStatusStatusSchema },
    ]),
    AuthModule,
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService]
})
export class MasterDataModule {}
