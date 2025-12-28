// import {
//   Injectable,
//   NotFoundException,
//   ForbiddenException,
//   BadRequestException,
//   Inject,
// } from '@nestjs/common';
// import { Repository } from 'typeorm';

// import { Company } from './entities/company.entity';
// import { Registry } from '../auth/entities/registry.entity';
// import { CreateCompanyDto } from './dto/create-company.dto';
// import { UpdateCompanyDto } from './dto/update-company.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ResponseInterface } from '../../common/interface/response-interface';

// @Injectable()
// export class CompanyService {
//   constructor(
//     @Inject('COMPANY_REPOSITORY')
//     private readonly companyRepository: Repository<Company>,

//     @Inject('AUTH_REPOSITORY')
//     private readonly registryRepository: Repository<Registry>,
//   ) {}

//   /* ===================== CREATE COMPANY ===================== */
//   async createCompany(
//     dto: CreateCompanyDto,
//     registryId: string,
//   ): Promise<Company> {
//     const registry = await this.registryRepository.findOne({
//       where: { id: registryId },
//       relations: ['company_profile'],
//     });

//     console.log(registry)
//     if (!registry) {
//       throw new NotFoundException('Registry not found');
//     }

//     // Prevent multiple companies for same registry
//     // if (registry.company_profile) {
//     //   throw new BadRequestException(
//     //     'Company profile already exists',
//     //   );
//     // }

//     const company = this.companyRepository.create({
//       admin_name:dto.admin_name,
//       about_company: dto.about_company,
//       company_logo: dto.company_logo,
//       country: dto.country,
//       language: dto.language,
//       timezone: dto.timezone,
//     });
//     let res = await this.companyRepository.save(company);
//     return res
//   }

//   async findByRegistryId(registryId: string): Promise<Company> {
//     const company = await this.companyRepository.findOne({
//       where: {  id: registryId },
//     });

//     if (!company) {
//       throw new NotFoundException('Company profile not found');
//     }

//     return company;
//   }

//   async updateCompany(
//     companyId: string,
//     dto: UpdateCompanyDto,
//     registryId: string,
//   ): Promise<Company> {
//     const company = await this.companyRepository.findOne({
//       where: { id: companyId },
//     });

//     if (!company) {
//       throw new NotFoundException('Company not found');
//     }

//     // Ownership check
//     // if (company.registry.id !== registryId) {
//     //   throw new ForbiddenException(
//     //     'You are not allowed to update this company',
//     //   );
//     // }

//     Object.assign(company, dto);

//     return this.companyRepository.save(company);
//   }
// }
