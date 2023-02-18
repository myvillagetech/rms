import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schemas';


@Injectable()
export class UserService {
  @InjectModel(MODEL_ENUMS.USERS) private usersModel: Model<UserDocument>;

  async createUser(createUserDto: CreateUserDto) {

    const hasedPassword = await this.generatePassword(
      createUserDto.password,
    );

    createUserDto.password = hasedPassword;
    const newUser = await new this.usersModel(createUserDto);
    return newUser.save();
  }

  async updateUser(id: string, updateUserDTO: UpdateUserDto,
  ): Promise<UserDocument> {
    if (updateUserDTO.password) {
      const hasedPassword = await this.generatePassword(
        updateUserDTO.password,
      );
      updateUserDTO.password = hasedPassword;
    }
    const existingUser = await this.usersModel.findByIdAndUpdate(
      id,
      updateUserDTO,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return existingUser;
  }

  async getUserById(id: string): Promise<UserDocument> {
    const existingUser = await this.usersModel.findById(id);
    if (!existingUser) {
      throw new NotFoundException(`user with ${id} is not found`);
    }
    return existingUser;
  }

  async getAllUsers(): Promise<UserDocument[]> {
    const userData = await this.usersModel.find();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('users data not found!');
    }
    return userData;
  }

  async deleteUser(id: string): Promise<UserDocument> {
    const deletedUser = await this.usersModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new NotFoundException(`user #${id} not found`);
    }
    return deletedUser;
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const user = await this.usersModel.findOne({ email: email }).exec();
    if (!user) {
        throw new NotFoundException(`user with ${email} is not found`);
    }

    return user;
  }



  /**
     * it will genrate the hashed password
     * @param password user Password
     * @returns the hashed password
     */
  async generatePassword(password: string): Promise<any> {
    const hash = await bcrypt.hashSync(password, 10);
    return hash;
  }

  /**
   * this is to verify unhashed password and hashed password
   * @param password unhased password
   * @param hashedPassword allready hashed and stored password
   * @returns a boolean true or false;
   */
  async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<any> {
    const result = await bcrypt.compareSync(password, hashedPassword);
    return result;
  }
}
