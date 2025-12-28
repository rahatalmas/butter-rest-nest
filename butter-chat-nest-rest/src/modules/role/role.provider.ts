import { DataSource } from "typeorm";
import { Role } from "./entities/role.entity";

export const RoleDbSourceProvider = [    
    {
        provide:'ROLE_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(Role),
        inject: ['MYSQL_DATA_SOURCE']
    }
];