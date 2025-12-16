import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository} from './department.repo';

@Injectable()
export class DepartmentService {

  constructor(private readonly departmentRepository:DepartmentRepository){}

  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.createDepartment(createDepartmentDto);
  }

  findAll(id:string) {
    return this.departmentRepository.getDepartmentsByCompanyId(id);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} department`;
  // }

  // update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
  //   return `This action updates a #${id} department`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} department`;
  // }
}
