import { Module } from '@nestjs/common';
//import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { AuthModule } from '../auth/auth.module';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Registry } from '../auth/entities/registry.entity';
import { TenantModule } from '../../data-source-module/tanents/tenant.module';
import { CompanyService } from './company.service';
import { CompanyRepository } from './company-repository';
@Module({
  imports:[
    AuthModule,TenantModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService,CompanyRepository],
  exports:[]
})
export class CompanyModule {}