import { Module } from '@nestjs/common';
import { EmployeeManagementService } from './employee.service';
import { EmployeeManagementController } from './employee.controller';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { EmployeeDbSourceProvider } from './employee.provider';
import { EmployeeManagementRepository } from './employee.repository';
import { AuthModule } from '../auth/auth.module';
import { TenantModule } from '../../data-source-module/tanents/tenant.module';

@Module({
  imports:[AuthModule,TenantModule],
  controllers: [EmployeeManagementController],
  providers: [],
  exports:[]
})
export class EmployeeManagementModule {}
