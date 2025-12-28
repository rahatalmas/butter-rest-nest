import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuthDto extends LoginAuthDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    company_name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    sub_domain: string
}