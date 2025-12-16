import { DataSource } from "typeorm";
import { Department } from "./entities/department.entity";

export const DepartmentDbSourceProvider = [
    {
        provide:'DEPARTMENT_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(Department),
        inject: ['MYSQL_DATA_SOURCE']
    }
];