import { Module } from "@nestjs/common";
import { MysqlDatabaseProvider } from "./mysql-datasource.provider";

@Module({
    providers:[...MysqlDatabaseProvider],
    exports:[...MysqlDatabaseProvider],
})
export class MySqlDataBaseModule {}