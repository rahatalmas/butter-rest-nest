import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company-repository';
import { CompanyDbSourceProvider } from './company-provider';
import { AuthModule } from '../auth/auth.module';
import { MySqlDataBaseModule } from '../../common/data-source-module/mysql/mysql-datasource.module';

@Module({
  imports:[AuthModule,MySqlDataBaseModule],
  controllers: [CompanyController],
  providers: [...CompanyDbSourceProvider,CompanyService,CompanyRepository],
  exports:[...CompanyDbSourceProvider]
})
export class CompanyModule {}
