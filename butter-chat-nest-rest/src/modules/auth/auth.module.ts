import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepo } from './auth.repo';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MySqlDataBaseModule } from '../../common/data-source-module/mysql/mysql-datasource.module';
import { AuthDbSourceProvider } from './auth.provider';

@Module({
  imports:[
      JwtModule.register({
        global:true,
        secret:jwtConstants.secret,
        //signOptions:{expiresIn:'1d'}
      }),
      MySqlDataBaseModule
  ],
  controllers: [AuthController],
  providers: [...AuthDbSourceProvider,AuthService,AuthRepo],
  exports:[...AuthDbSourceProvider]
})
export class AuthModule {}
