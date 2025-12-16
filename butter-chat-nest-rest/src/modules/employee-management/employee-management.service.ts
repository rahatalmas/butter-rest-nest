import { Injectable } from '@nestjs/common';
import { CreateEmployeeManagementDto } from './dto/create-employee-management.dto';
import { UpdateEmployeeManagementDto } from './dto/update-employee-management.dto';
import { EmployeeManagementRepository } from './employee-management.repository';

@Injectable()
export class EmployeeManagementService {

  constructor(private readonly employeeRepository: EmployeeManagementRepository){}

  create(createEmployeeManagementDto: CreateEmployeeManagementDto) {
    return this.employeeRepository.createEmployee(createEmployeeManagementDto);
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
