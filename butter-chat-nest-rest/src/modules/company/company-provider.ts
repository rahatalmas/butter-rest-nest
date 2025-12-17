import { DataSource } from "typeorm";
import { Company } from "./entities/company.entity";

export const CompanyDbSourceProvider = [    
    {
        provide:'COMPANY_REPOSITORY',
        useFactory:(dataSource: DataSource)=> dataSource.getRepository(Company),
        inject: ['MYSQL_DATA_SOURCE']
    }
];