import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CreateCompanyDto } from './dto/create-company.dto';
import { CompanyRepository } from './company-repository';

@Injectable()
export class CompanyService {

  constructor(private readonly companyRepository:CompanyRepository){}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companyRepository.create(createCompanyDto);
  }

  findAll() {
    return this.companyRepository.findAll();
  }

  findOne(id: string) {
    return this.companyRepository.findOne(id);
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyRepository.update(id,updateCompanyDto)
  }

  remove(id: string) {
    return this.companyRepository.remove(id)
  }
}