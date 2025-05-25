import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ProfileModule } from "./profile/profile.module";
@Module({
    controllers: [AppController],
    imports:[UserModule,
        TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ankur',
  database: 'nestjs',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // set to false in production
}),
        AuthModule,
        JwtModule, ProfileModule

    ],
    providers: [AuthService]
})

export class AppModule {}