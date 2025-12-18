import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  about_company?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  company_logo?: string;
}