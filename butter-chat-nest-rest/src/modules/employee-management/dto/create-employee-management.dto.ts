import { IsNotEmpty, IsString, IsUUID, IsEmail, IsOptional, IsDateString, MinLength, IsEnum } from 'class-validator';

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  RETIRED = 'RETIRED',
}

export enum EmployeeShift {
  DAY = 'DAY',
  NIGHT = 'NIGHT',
}

export class CreateEmployeeManagementDto {

  @IsNotEmpty()
  @IsUUID()
  companyId: string;

  @IsNotEmpty()
  @IsUUID()
  departmentId: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsDateString()
  joiningDate?: string;

  @IsNotEmpty()
  @IsEnum(EmployeeStatus, { message: 'Status must be either ACTIVE or RETIRED' })
  status: EmployeeStatus;

  @IsNotEmpty()
  @IsEnum(EmployeeShift, { message: 'Shift must be either DAY or NIGHT' })
  shift: EmployeeShift;
}
