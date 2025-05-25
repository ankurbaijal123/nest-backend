import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDTO{
        @IsNotEmpty()
        @IsString()
        name: string;
    
        @IsEmail()
        emailId: string;
}