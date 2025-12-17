import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeManagementDto, EmployeeStatus } from './dto/create-employee-management.dto';
import * as bcrypt from 'bcrypt';
import { ResponseInterface } from '../../common/interface/response-interface';

@Injectable()
export class EmployeeManagementRepository {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  // Create a new employee
  async createEmployee(dto: CreateEmployeeManagementDto){
    return "hello"
  }

  // Fetch all employees for a company
  async getEmployeesByCompanyId(companyId: string){
    return 'hello'
  }

  // Fetch all employees in a department for a specific company
  async getEmployeesByCompanyAndDepartment(companyId: string, departmentId: string) {

    return 'hello'
  }
}
