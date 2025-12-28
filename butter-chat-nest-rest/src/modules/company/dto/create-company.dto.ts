import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateCompanyDto {
    @ApiProperty({
      example: 'company admin',
      required: false,
    })
    @IsString()
    admin_name: string;

    @ApiProperty({
      example: 'We build enterprise chat solutions',
      required: false,
    })
    @IsOptional()
    @IsString()
    about_company?: string;

    @ApiProperty({
      example: 'https://cdn.example.com/logo.png',
      required: false,
    })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    company_logo?: string;

    @ApiProperty({ example: 'Bangladesh' })
    @IsString()
    @IsNotEmpty()
    country: string;

    @ApiProperty({ example: 'English' })
    @IsString()
    @IsNotEmpty()
    language: string;

    @ApiProperty({ example: 'Asia/Dhaka' })
    @IsString()
    @IsNotEmpty()
    timezone: string;
}
