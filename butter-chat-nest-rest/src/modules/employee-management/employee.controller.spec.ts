import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeManagementController } from './employee.controller';
import { EmployeeManagementService } from './employee.service';

describe('EmployeeManagementController', () => {
  let controller: EmployeeManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeManagementController],
      providers: [EmployeeManagementService],
    }).compile();

    controller = module.get<EmployeeManagementController>(EmployeeManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
