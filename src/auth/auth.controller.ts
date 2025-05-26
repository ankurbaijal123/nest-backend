import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './LoginDTO';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')

  // login(@Body() loginDTO: LoginDTO){
  //         return this.authService.login(loginDTO.emailId, loginDTO.password)
  //     }
  async login(@Request() req: any, @Res() res: Response) {
    const token = await this.authService.login(req.user);
    res.cookie('token', token.access_token, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
      maxAge: 1000 * 60 * 15, // 15 minutes
    });

    return res.json({
      message: 'Login successfull,  Hi! ' + req.user.firstName,
    });
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('access_token');
    return res.send({ message: 'Logged out' });
  }
}
