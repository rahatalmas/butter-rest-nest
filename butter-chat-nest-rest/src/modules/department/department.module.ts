import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentDbSourceProvider } from './department.provider';
import { MySqlDataBaseModule } from '../../common/data-source-module/mysql/mysql-datasource.module';
import { DepartmentRepository } from './department.repo';
                                                                                                                                                                                                                                                                                                                                                                                                            
@Module({
  imports:[
      MySqlDataBaseModule
  ],
  controllers: [DepartmentController],
  providers: [...DepartmentDbSourceProvider,DepartmentService,DepartmentRepository],
  exports:[...DepartmentDbSourceProvider]
})
export class DepartmentModule {}