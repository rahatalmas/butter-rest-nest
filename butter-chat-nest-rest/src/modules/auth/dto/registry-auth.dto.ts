import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuthDto extends LoginAuthDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    business_name: string
}