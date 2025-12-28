import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepo } from './auth.repo';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MySqlDataBaseModule } from '../../data-source-module/master/master-datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registry } from './entities/registry.entity';

@Module({
  imports:[
      JwtModule.register({
        global:true,
        secret:jwtConstants.secret,
        //signOptions:{expiresIn:'1d'}
      }),
      MySqlDataBaseModule,
      TypeOrmModule.forFeature([Registry], 'MASTER_DB'),
  ],
  controllers: [AuthController],
  providers: [AuthService,AuthRepo],
  exports:[AuthService]
})
export class AuthModule {}
