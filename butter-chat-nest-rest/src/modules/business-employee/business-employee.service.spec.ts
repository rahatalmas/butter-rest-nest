import { Test, TestingModule } from '@nestjs/testing';
import { BusinessEmployeeService } from './business-employee.service';

describe('BusinessEmployeeService', () => {
  let service: BusinessEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessEmployeeService],
    }).compile();

    service = module.get<BusinessEmployeeService>(BusinessEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
