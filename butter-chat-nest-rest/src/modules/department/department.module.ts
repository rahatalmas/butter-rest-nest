import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { MySqlDataBaseModule } from '../common/data-source-module/mysql/mysql-datasource.module';
import { DepartmentDbSourceProvider } from './department.provider';
import { DepartmentRepository } from './department.repo';

@Module({
  imports:[
      MySqlDataBaseModule
  ],
  controllers: [DepartmentController],
  providers: [...DepartmentDbSourceProvider,DepartmentService,DepartmentRepository],
})
export class DepartmentModule {}
