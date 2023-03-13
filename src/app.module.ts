import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { ConfigModule } from '@nestjs/config';
import { SupplierModule } from './supplier/supplier.module';
import { RequestModule } from './request/request.module';
import { CommentsModule } from './comments/comments.module';
import { MasterDataModule } from './master-data/master-data.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_KEYS.url),
    UserModule, 
    AuthModule, 
    ConfigModule.forRoot(), 
    SupplierModule, 
    RequestModule, 
    CommentsModule,  
    MasterDataModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
  }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
function join(__dirname: string, arg1: string, arg2: string): string {
  throw new Error('Function not implemented.');
}

