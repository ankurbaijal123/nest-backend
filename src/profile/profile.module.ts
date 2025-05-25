import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers : [ProfileController],
    imports:[AuthModule]
    
})
export class ProfileModule {}
