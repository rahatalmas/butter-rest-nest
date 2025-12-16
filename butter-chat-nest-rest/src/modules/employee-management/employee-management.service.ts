import { Injectable } from '@nestjs/common';
import { CreateEmployeeManagementDto } from './dto/create-employee-management.dto';
import { UpdateEmployeeManagementDto } from './dto/update-employee-management.dto';

@Injectable()
export class EmployeeManagementService {
  create(createEmployeeManagementDto: CreateEmployeeManagementDto) {
    return 'This action adds a new employeeManagement';
  }

  findAll() {
    return `This action returns all employeeManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeManagement`;
  }

  update(id: number, updateEmployeeManagementDto: UpdateEmployeeManagementDto) {
    return `This action updates a #${id} employeeManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeManagement`;
  }
}
