import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDTO } from 'src/auth/LoginDTO';

@Controller('profile')
export class ProfileController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    profile(@Body() loginDTO: LoginDTO){
        return {message : "I am protected route"}
    }
}
