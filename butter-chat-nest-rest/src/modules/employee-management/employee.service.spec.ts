import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeManagementService } from './employee.service';

describe('EmployeeManagementService', () => {
  let service: EmployeeManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeManagementService],
    }).compile();

    service = module.get<EmployeeManagementService>(EmployeeManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
