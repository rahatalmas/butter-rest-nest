import { Module } from '@nestjs/common';
import { BusinessEmployeeService } from './business-employee.service';
import { BusinessEmployeeController } from './business-employee.controller';

@Module({
  controllers: [BusinessEmployeeController],
  providers: [BusinessEmployeeService],
})
export class BusinessEmployeeModule {}
