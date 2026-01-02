import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Company } from "../../modules/company/entities/company.entity";
import { Department } from "../../modules/department/entities/department.entity";
import { Employee } from "../../modules/employee-management/entities/employee.entity";
import { Role } from "../../modules/role/entities/role.entity";

@Injectable()
export class TenantConnectionService {
  private connections = new Map<string, DataSource>();

  async getConnection(dbName: string): Promise<DataSource | undefined>{
    if (this.connections.has(dbName)) {
      return this.connections.get(dbName);
    }

    const ds = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      //later i'll create a separte user for isolating main db
      username: 'root',
      password: '',
      database: dbName,
      entities: [Company,Department,Employee,Role],
      //migrations:['dist/migrations/*.js'],
      synchronize: true,
    });

    await ds.initialize();
    //await ds.runMigrations();
    this.connections.set(dbName, ds);
    return ds;
  }               
}
