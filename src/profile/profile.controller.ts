import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO } from 'src/auth/LoginDTO';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';

class User{
  userId : number
}
@Controller('profile')
export class ProfileController {
  constructor(private userService : UserService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getProfile(@Req() req: Request) {
    const {userId} = req.user as User
    console.log(userId)
    const userData = await this.userService.getUser(userId)
    return {
      message: 'Protected profile route',
      userData: userData,  
    };
}
}
