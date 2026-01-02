import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeManagementModule } from './modules/employee-management/employee.module';
import { DepartmentModule } from './modules/department/department.module';
import { CompanyModule } from './modules/company/company.module';
import { GoogleAuthModule } from './modules/social-media-auth/google-auth/google-auth.module';
import { RoleModule } from './modules/role/role.module';
import { TenantModule } from './data-source-module/tanents/tenant.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { TenantGuard } from './data-source-module/tanents/tanant.guard';

@Module({
  imports: [
    AuthModule,
    TenantModule,
    GoogleAuthModule,
    CompanyModule,
    // RoleModule,
    DepartmentModule, 
    EmployeeManagementModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide:APP_GUARD,
    //   useClass:AuthGuard
    // },
    // {
    //   provide:APP_GUARD,
    //   useClass:TenantGuard
    // }
  ],
})
export class AppModule {}
