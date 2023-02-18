import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Req, Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post('login')
  async login(@Res() response, @Body() body: LoginDto) {
    try {
      const result = await this.authService.login(body);
      return response.status(HttpStatus.OK).json({
        message: 'Login Successfull',
        success: true,
        result
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Invalid user credentials! Please try again',
        error: error,
        success: false,
      });
    }
  }

  @Post('signup')
  async signup(@Res() response, @Req() request,  @Body() body: CreateUserDto) {
    try {
      const result = await this.authService.signup(body);
      return response.status(HttpStatus.CREATED).json({
        message: 'User  signedup successfully',
        success: true,
        result
      });
    }
    catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'something went worng',
        statusCode: 400,
        error: error,
        success: false,
      });
    }
  }

}
