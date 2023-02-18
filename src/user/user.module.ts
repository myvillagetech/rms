import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { UserSchema } from './schemas/user.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.USERS, schema: UserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports:[
    UserService
  ]
})
export class UserModule {}
