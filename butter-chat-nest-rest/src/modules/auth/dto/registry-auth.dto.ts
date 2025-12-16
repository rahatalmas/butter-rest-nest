import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDto extends LoginAuthDto {
    @IsNotEmpty()
    @IsString()
    businessName: string
}