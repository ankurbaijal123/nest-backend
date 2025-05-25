import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './LoginDTO';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
        
    // login(@Body() loginDTO: LoginDTO){
    //         return this.authService.login(loginDTO.emailId, loginDTO.password)
    //     }

    login(@Request() req : any){
            return this.authService.login(req.user);
        }
        
    
    
    @UseGuards(AuthGuard('local'))
    @Post('auth/logout')
    async logout(@Request() req) {
         req.logout();
    }
}
