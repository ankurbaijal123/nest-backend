import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from "./user/user.controller";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from '@nestjs/typeorm';

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
})

    ]
})

export class AppModule {}