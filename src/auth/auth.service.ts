import { Body, Injectable } from '@nestjs/common';
import { LoginDTO } from './LoginDTO';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  

async validateUser(emailId: string, password: string) {
  const user = await this.userService.findByEmail(emailId);
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
}


  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
