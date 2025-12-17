import { IsNotEmpty, IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsUUID()
  registry_id: string; // FK to Registry

  @IsOptional()
  @IsString()
  about_company?: string;

  @IsOptional()
  @IsString()
  company_logo?: string;
}