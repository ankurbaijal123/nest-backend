import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO } from 'src/auth/LoginDTO';
import { Request } from 'express';
@Controller('profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
  @Get()
  getProfile(@Req() req: Request) {
    return {
      message: 'Protected profile route',
      user: req.user,  
    };
}
}
