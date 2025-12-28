import { Module } from "@nestjs/common";
import { MySqlDataBaseModule } from "../master/master-datasource.module";
import { TenantResolver } from "./tenant.resolver";
import { TenantConnectionService } from "./tenant-connection.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Registry } from "../../modules/auth/entities/registry.entity";

@Module({
    imports:[
        MySqlDataBaseModule,
        TypeOrmModule.forFeature([Registry], 'MASTER_DB'),
    ],
    providers:[TenantResolver,TenantConnectionService],
    exports:[TenantResolver,TenantConnectionService]
})
export class TenantModule{}