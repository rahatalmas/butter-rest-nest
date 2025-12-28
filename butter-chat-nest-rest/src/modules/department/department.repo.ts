import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentRepository {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private readonly repo: Repository<Department>,
  ) {}

  /**
   * Create a department with the company from JWT
   * @param dto - CreateDepartmentDto
   * @param companyId - obtained from JWT
   */
  async create(dto: CreateDepartmentDto, companyId: string): Promise<Department> {
    const department = this.repo.create({
      department_name: dto.department_name,
      description: dto.description,
      department_profile_uri: dto.department_profile_uri,
      company: { id: companyId }, // FK via relation
    });

    return this.repo.save(department);
  }

  async findAll(): Promise<Department[]> {
    return this.repo.find({
      relations: ['company'],
    });
  }

  async findByCompany(companyId: string): Promise<Department[]> {
    return this.repo.find({
      where: { company: { id: companyId } },
      relations: ['company'],
    });
  }

  async exists(companyId: string, department_name: string): Promise<boolean> {
    return this.repo.exist({
      where: {
        company: { id: companyId },
        department_name,
      },
    });
  }
}
