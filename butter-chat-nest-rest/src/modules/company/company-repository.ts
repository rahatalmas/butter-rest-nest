import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Registry } from '../auth/entities/registry.entity';
import { DataSource } from 'typeorm/browser';
import { combineAll } from 'rxjs';

@Injectable()
export class CompanyRepository {
  constructor(
  ) {}

  async createProfile(company: Company,db: DataSource): Promise<Company> {
    console.log("created company profile: ",company)
    try{
       let res= await db.getRepository(Company).save(company)
       console.log(res)
    }catch(err){
        console.log(err)
    }
    return company;
  }

  //for studio butterfly admins........
  async findAll(): Promise<Company[]> {
    return [new Company()]
  }

  async findProfile(id: string): Promise<Company> {
    return new Company;
  }

  async updateProfile(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return new Company
  }

  async removeProfile(id: string): Promise<{ deleted: boolean }> {
    return { deleted: true };
  }
}
