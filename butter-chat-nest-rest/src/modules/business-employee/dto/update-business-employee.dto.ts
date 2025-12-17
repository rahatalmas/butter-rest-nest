import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessEmployeeDto } from './create-business-employee.dto';

export class UpdateBusinessEmployeeDto extends PartialType(CreateBusinessEmployeeDto) {}
