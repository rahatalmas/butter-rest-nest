import { Module } from '@nestjs/common';
import { DepartmentEmployeeService } from './department-employee.service';
import { DepartmentEmployeeController } from './department-employee.controller';

@Module({
  controllers: [DepartmentEmployeeController],
  providers: [DepartmentEmployeeService],
})
export class DepartmentEmployeeModule {}
