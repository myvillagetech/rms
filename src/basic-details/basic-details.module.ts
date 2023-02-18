import { Module } from '@nestjs/common';
import { BasicDetailsService } from './basic-details.service';
import { BasicDetailsController } from './basic-details.controller';

@Module({
  controllers: [BasicDetailsController],
  providers: [BasicDetailsService]
})
export class BasicDetailsModule {}
