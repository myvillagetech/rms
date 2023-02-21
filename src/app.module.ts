import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { ConfigModule } from '@nestjs/config';
import { BasicDetailsModule } from './basic-details/basic-details.module';
import { RequestedCommentsModule } from './requested-comments/requested-comments.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_KEYS.url),
    UserModule, 
    AuthModule, 
    ConfigModule.forRoot(), 
    BasicDetailsModule, 
    RequestedCommentsModule, 
    // SupplierModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
