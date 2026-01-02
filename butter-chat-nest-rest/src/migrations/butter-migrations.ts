import { DataSource } from "typeorm";
import { Department } from "../modules/department/entities/department.entity";
import { Company } from "../modules/company/entities/company.entity";
import { Employee } from "../modules/employee-management/entities/employee.entity";
import { Role } from "../modules/role/entities/role.entity";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'butter_template',
  entities: [Company,Department,Employee,Role],
  migrations: ['dest/migrations/*.js'],
  synchronize: false,
});
