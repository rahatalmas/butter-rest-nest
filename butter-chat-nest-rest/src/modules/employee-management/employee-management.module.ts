import { Module } from '@nestjs/common';
import { EmployeeManagementService } from './employee-management.service';
import { EmployeeManagementController } from './employee-management.controller';
import { MySqlDataBaseModule } from '../../common/data-source-module/mysql/mysql-datasource.module';
import { EmployeeDbSourceProvider } from './employee-management.provider';
import { EmployeeManagementRepository } from './employee-management.repository';

@Module({
  imports:[MySqlDataBaseModule],
  controllers: [EmployeeManagementController],
  providers: [...EmployeeDbSourceProvider,EmployeeManagementService,EmployeeManagementRepository],
})
export class EmployeeManagementModule {}
