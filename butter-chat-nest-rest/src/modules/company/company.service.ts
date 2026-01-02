import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Inject,
} from '@nestjs/common';

import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { DataSource } from 'typeorm';
import { CompanyRepository } from './company-repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository:CompanyRepository){}

  async createCompany(
    dto: CreateCompanyDto,
    registryId: string,
    db: DataSource
  ): Promise<Company> {
    console.log("company")
    const company = db.getRepository(Company).create(
        {
            id:registryId,
            ...dto
        }
    )
    return this.companyRepository.createProfile(company,db)
  }

  async findByRegistryId(registryId: string) {
    return "hello"
  }
}
