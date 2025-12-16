import { DataSource } from "typeorm";
import { Registry } from "./entities/registry.entity";
import { Injectable } from "@nestjs/common";

export const AuthDbSourceProvider = [
    {
        provide:'AUTH_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(Registry),
        inject: ['MYSQL_DATA_SOURCE']
    }
];