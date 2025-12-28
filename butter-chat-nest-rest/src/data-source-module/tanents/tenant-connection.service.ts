import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

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
      entities: [],
      synchronize: false,
    });

    await ds.initialize();
    this.connections.set(dbName, ds);
    return ds;
  }
}
