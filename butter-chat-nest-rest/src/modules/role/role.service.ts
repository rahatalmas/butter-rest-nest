import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleRepository } from './role.repository';
import { ResponseInterface } from '../../common/interface/response-interface';

@Injectable()
export class RoleService {
    constructor(private readonly roleRepository: RoleRepository) {}

    async create(dto: CreateRoleDto): Promise<ResponseInterface> {
        const alreadyExists = await this.roleRepository.exists(
            dto.company_id,
            dto.name,
        );

        if (alreadyExists) {
            throw new ConflictException(
                'Role already exists for this company',
            );
        }

        const role = await this.roleRepository.create(dto);

        return new ResponseInterface({
            message: 'Role created successfully',
            status: 'success',
            data: role,
        });
    }

    async findAll(): Promise<ResponseInterface> {
        const roles = await this.roleRepository.findAll();

        return new ResponseInterface({
            message: 'Roles fetched successfully',
            status: 'success',
            data: roles,
        });
    }

    async findByCompany(companyId: string): Promise<ResponseInterface> {
        const roles = await this.roleRepository.findByCompany(companyId);

        return new ResponseInterface({
            message: 'Company roles fetched successfully',
            status: 'success',
            data: roles,
        });
    }
}
