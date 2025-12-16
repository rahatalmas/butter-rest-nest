import { DataSource } from "typeorm";
import { EmployeeManagement } from "./entities/employee-management.entity";

export const EmployeeDbSourceProvider = [
    {
        provide:'EMPLOYEE_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(EmployeeManagement),
        inject: ['MYSQL_DATA_SOURCE']
    }
];