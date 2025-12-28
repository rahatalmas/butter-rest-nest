import { Module } from '@nestjs/common';
import { EmployeeManagementService } from './employee.service';
import { EmployeeManagementController } from './employee.controller';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { EmployeeDbSourceProvider } from './employee.provider';
import { EmployeeManagementRepository } from './employee.repository';

@Module({
  imports:[MySqlDataBaseModule],
  controllers: [EmployeeManagementController],
  providers: [...EmployeeDbSourceProvider,EmployeeManagementService,EmployeeManagementRepository],
  exports:[...EmployeeDbSourceProvider]
})
export class EmployeeManagementModule {}
