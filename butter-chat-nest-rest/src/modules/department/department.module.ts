import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentDbSourceProvider } from './department.provider';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { DepartmentRepository } from './department.repo';
import { AuthModule } from '../auth/auth.module';
import { TenantModule } from '../../data-source-module/tanents/tenant.module';
                                                                                                                                                                                                                                                                                                                                                                                                            
@Module({
  imports:[
     AuthModule,TenantModule 
  ],
  controllers: [DepartmentController],
  providers: [],
  exports:[]
})
export class DepartmentModule {}