import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { SupplierSchema } from './schemas/supplier.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.REQUESTED_COMMENTS, schema: SupplierSchema },
    ]),
    AuthModule,
],
  controllers: [SupplierController],
  providers: [SupplierService]
})
export class SupplierModule {}
