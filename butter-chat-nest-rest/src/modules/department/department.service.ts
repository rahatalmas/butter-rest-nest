import { ConflictException, Injectable } from '@nestjs/common';
import { ResponseInterface } from '../../common/interface/response-interface';
import { DepartmentRepository } from './department.repo';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentService {
    constructor(private readonly departmentRepository: DepartmentRepository) {}
 
    //create new department
    async create(dto: CreateDepartmentDto,companyId:string): Promise<ResponseInterface> {
        console.log(dto)
        const alreadyExists = await this.departmentRepository.exists(
            companyId,
            dto.department_name,
        );
        console.log(alreadyExists)

        if (alreadyExists) {
            throw new ConflictException(
                'Department already exists for this company',
            );
        }

        const department = await this.departmentRepository.create(dto,companyId);

        return new ResponseInterface({
            message: 'created successfully',
            status: 'success',
            data: department,
        });
    }

    //find all the partments....
    //for studio butterfly admins...
    async findAll(): Promise<ResponseInterface> {
        const departments = await this.departmentRepository.findAll();

        return new ResponseInterface({
            message: 'departments fetched successfully',
            status: 'success',
            data: departments,
        });
    }

    async findByCompany(companyId: string): Promise<ResponseInterface> {
        const departments = await this.departmentRepository.findByCompany(companyId);

        return new ResponseInterface({
            message: 'Company departments fetched successfully',
            status: 'success',
            data: departments,
        });
    }
}
