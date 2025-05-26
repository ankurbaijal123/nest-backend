import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
    controllers : [ProfileController],
    imports:[AuthModule, UserModule]
    
})
export class ProfileModule {}
