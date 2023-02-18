import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import jwt, { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Error } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private userService : UserService) {}

    getDecodedToken(token: string) {
        const tokenPart = token ? token.split(' ')[1] : '';

        try {
            return verify(tokenPart, process.env.ACCESS_SECRET);
        } catch (e) {
            console.error(e.message);
            return null;
        }
    }

    async login(loginDetails: LoginDto): Promise<any> {
        const user: any = await this.userService.getUserByEmail(
            loginDetails.email,
        );
        if (!user) {
            throw new Error('Invaild user details');
        }
        const verifyUser: any = await this.verifyPassword(
            loginDetails.password,
            user.password,
        );
        if (verifyUser) {
            const accessToken = sign(
                { ...user._doc, password: undefined },
                process.env.ACCESS_SECRET,
                {
                    expiresIn: '4hr',
                },
            );
            return {
                accessToken: accessToken,
                role: user.roles,
                userId: user._id,
            };
        } else {
            throw new Error('Invaild Password');
        }
    }

    async signup(signUpDetails : CreateUserDto) {
        const user = await this.userService.createUser(signUpDetails);
    
        return user;
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
