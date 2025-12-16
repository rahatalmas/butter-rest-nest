import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeManagement } from './entities/employee-management.entity';
import { CreateEmployeeManagementDto, EmployeeStatus } from './dto/create-employee-management.dto';
import * as bcrypt from 'bcrypt';
import { ResponseInterface } from '../../common/interface/response-interface';

@Injectable()
export class EmployeeManagementRepository {
  constructor(
     @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepo: Repository<EmployeeManagement>,
  ) {}

  // Create a new employee
  async createEmployee(dto: CreateEmployeeManagementDto): Promise<ResponseInterface> {
    // Check if email already exists
    const existing = await this.employeeRepo.findOne({ where: { email: dto.email } });
    if (existing) {
      return new ResponseInterface({ message: 'Email already exists', data: null });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const employee = this.employeeRepo.create({
      companyId: dto.companyId,
      departmentId: dto.departmentId,
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      password: hashedPassword,
      phoneNumber: dto.phoneNumber,
      dateOfBirth: dto.dateOfBirth,
      joiningDate: dto.joiningDate,
      status: dto.status || EmployeeStatus.ACTIVE,
      shift:dto.shift
    });

    const saved = await this.employeeRepo.save(employee);
    return new ResponseInterface({ message: 'Employee created successfully', data: saved });
  }

  // Fetch all employees for a company
  async getEmployeesByCompanyId(companyId: string): Promise<ResponseInterface> {
    const employees = await this.employeeRepo.find({
      where: { companyId },
      order: { createdDate: 'ASC' },
    });
    return new ResponseInterface({ message: 'Employees fetched successfully', data: employees });
  }

  // Fetch all employees in a department for a specific company
  async getEmployeesByCompanyAndDepartment(companyId: string, departmentId: string): Promise<ResponseInterface> {
    const employees = await this.employeeRepo.find({
      where: { companyId, departmentId },
      order: { createdDate: 'ASC' },
    });
    return new ResponseInterface({ message: 'Employees fetched successfully', data: employees });
  }
}
