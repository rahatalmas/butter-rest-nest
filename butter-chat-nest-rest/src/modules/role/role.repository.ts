import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleRepository {
    constructor(
        @Inject('ROLE_REPOSITORY')
        private readonly repo: Repository<Role>,
    ) {}

    async create(data: CreateRoleDto): Promise<Role> {
        return this.repo.save(this.repo.create(data));
    }

    async findAll(): Promise<Role[]> {
        return this.repo.find();
    }

    async findByCompany(companyId: string): Promise<Role[]> {
        return this.repo.find({ where: { company_id: companyId } });
    }

    async exists(companyId: string, name: string): Promise<boolean> {
        return this.repo.exist({
            where: { company_id: companyId, name },
        });
    }
}
