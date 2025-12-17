import { join } from 'path';
import {DataSource} from 'typeorm';
import { Registry } from '../../../modules/auth/entities/registry.entity';
import { Employee } from '../../../modules/employee-management/entities/employee.entity';
import { Department } from '../../../modules/department/entities/department.entity';

export const MysqlDatabaseProvider = [
    {
        provide: 'MYSQL_DATA_SOURCE',
        useFactory: async()=>{
            const dataSource = new DataSource({
                type:'mysql',
                host:'localhost',
                port:3306,
                username:'root',
                password:'',
                database:'butter_chat',
                entities:[
                    Registry,Department,Employee
                ],
                // entities: [
                //     join(__dirname, '..', '..', '..', 'modules', '**', '*.entity.{ts,js}')
                // ],
                /*
                 ***Warning***
                 * Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
                */
                // synchronize:true, //dev only
                extra:{
                    connectionLimit: 50,
                },
            });
            return dataSource.initialize();
        }
    }
]

/*
-> Using the DataSource instance you can execute database operations with your entities,
-> particularly using .manager and .getRepository() properties
*/