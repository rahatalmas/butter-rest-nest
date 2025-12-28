// import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { Company } from './entities/company.entity';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';
// import { Registry } from '../auth/entities/registry.entity';

// @Injectable()
// export class CompanyRepository {
//   constructor(
//     @Inject('AUTH_REPOSITORY')
//     private readonly registryRepository: Repository<Registry>,

//     @Inject('COMPANY_REPOSITORY')
//     private readonly companyRepository: Repository<Company>,
//   ) {}

//   // async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
//   //   const { registry_id, about_company, company_logo } = createCompanyDto;

//   //   // Fetch registry
//   //   const registry = await this.registryRepository.findOne({ where: { id: registry_id }});
//   //   if (!registry) {
//   //     throw new NotFoundException(`Registry with id ${registry_id} not found`);
//   //   }

//   //   const company = this.companyRepository.create({
//   //     registry,
//   //     about_company,
//   //     company_logo,
//   //   });

//   //   return await this.companyRepository.save(company);
//   // }

//   async findAll(): Promise<Company[]> {
//     return await this.companyRepository.find({
//       relations: ['registry', 'departments', 'employees'],
//       order: { id: 'ASC' },
//     });
//   }

//   async findOne(id: string): Promise<Company> {
//     const company = await this.companyRepository.findOne({
//       where: { id },
//       relations: ['registry', 'departments', 'employees'],
//     });
//     if (!company) {
//       throw new NotFoundException(`Company with id ${id} not found`);
//     }
//     return company;
//   }

//   async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
//     const company = await this.findOne(id);

//     Object.assign(company, updateCompanyDto); // merge updates
//     return await this.companyRepository.save(company);
//   }

//   async remove(id: string): Promise<{ deleted: boolean }> {
//     const result = await this.companyRepository.delete(id);
//     if (result.affected === 0) {
//       throw new NotFoundException(`Company with id ${id} not found`);
//     }
//     return { deleted: true };
//   }
// }
