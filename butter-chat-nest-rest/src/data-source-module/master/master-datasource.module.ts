import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registry } from '../../modules/auth/entities/registry.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'MASTER_DB',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'butter_chat',
      entities: [Registry],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Registry], 'MASTER_DB'),
  ],
  exports: [TypeOrmModule],
})
export class MySqlDataBaseModule {}
