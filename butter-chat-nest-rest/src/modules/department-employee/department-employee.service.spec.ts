import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentEmployeeService } from './department-employee.service';

describe('DepartmentEmployeeService', () => {
  let service: DepartmentEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentEmployeeService],
    }).compile();

    service = module.get<DepartmentEmployeeService>(DepartmentEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
