import { Module } from '@nestjs/common';
import { BasicDetailsService } from './basic-details.service';
import { BasicDetailsController } from './basic-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BasicDetailsSchema } from './schemas/basic-detail.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BASIC_DETAILS, schema: BasicDetailsSchema },
    ]),
  ],
  controllers: [BasicDetailsController],
  providers: [BasicDetailsService]
})
export class BasicDetailsModule {}
