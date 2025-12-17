import { DataSource } from "typeorm";
import { Employee } from "./entities/employee.entity";

export const EmployeeDbSourceProvider = [
    {
        provide:'EMPLOYEE_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(Employee),
        inject: ['MYSQL_DATA_SOURCE']
    }
];