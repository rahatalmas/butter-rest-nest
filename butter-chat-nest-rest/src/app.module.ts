import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DepartmentModule } from './department/department.module';
import { EmployeeManagementModule } from './modules/employee-management/employee-management.module';

@Module({
  imports: [AuthModule, DepartmentModule, EmployeeManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
