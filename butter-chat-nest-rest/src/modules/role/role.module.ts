import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleRepository } from './role.repository';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { RoleDbSourceProvider } from './role.provider';

@Module({
  imports:[MySqlDataBaseModule],
  controllers: [RoleController],
  providers: [...RoleDbSourceProvider,RoleService,RoleRepository],
  exports:[...RoleDbSourceProvider]
})
export class RoleModule {}
