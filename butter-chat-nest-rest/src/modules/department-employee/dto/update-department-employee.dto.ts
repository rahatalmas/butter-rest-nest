import { PartialType } from '@nestjs/mapped-types';
import { CreateDepartmentEmployeeDto } from './create-department-employee.dto';

export class UpdateDepartmentEmployeeDto extends PartialType(CreateDepartmentEmployeeDto) {}
