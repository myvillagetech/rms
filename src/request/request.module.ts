import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { RequestSchema } from './schemas/request.schema';
import { MasterDataModule } from 'src/master-data/master-data.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.REQUEST, schema: RequestSchema },
    ]),
    MasterDataModule
  ],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
