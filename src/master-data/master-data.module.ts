import { Module } from '@nestjs/common';
import { MasterDataService } from './master-data.service';
import { MasterDataController } from './master-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema, CompanySchemaCreator } from './schemas/company.schema';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name:MODEL_ENUMS.COMPANY , schema:CompanySchema },
    ]),
    AuthModule,
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService]
})
export class MasterDataModule {}
