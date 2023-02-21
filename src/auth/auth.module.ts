import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './strategies/jwt.strategies';

@Module({
  imports: [
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
