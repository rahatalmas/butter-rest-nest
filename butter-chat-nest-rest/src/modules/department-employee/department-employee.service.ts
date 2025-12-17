import { Injectable } from '@nestjs/common';
import { CreateDepartmentEmployeeDto } from './dto/create-department-employee.dto';
import { UpdateDepartmentEmployeeDto } from './dto/update-department-employee.dto';

@Injectable()
export class DepartmentEmployeeService {
  create(createDepartmentEmployeeDto: CreateDepartmentEmployeeDto) {
    return 'This action adds a new departmentEmployee';
  }

  findAll() {
    return `This action returns all departmentEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentEmployee`;
  }

  update(id: number, updateDepartmentEmployeeDto: UpdateDepartmentEmployeeDto) {
    return `This action updates a #${id} departmentEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentEmployee`;
  }
}
