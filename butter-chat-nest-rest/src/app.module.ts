import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeManagementModule } from './modules/employee-management/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { CompanyModule } from './modules/company/company.module';

@Module({
  imports: [AuthModule, CompanyModule, DepartmentModule, EmployeeManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
