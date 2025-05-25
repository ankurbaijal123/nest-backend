
import { IsNumber, IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDTO {
    @IsNumber()
    @IsOptional()
    userId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    emailId: string;
}
