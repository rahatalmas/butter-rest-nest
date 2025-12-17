import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentEmployeeController } from './department-employee.controller';
import { DepartmentEmployeeService } from './department-employee.service';

describe('DepartmentEmployeeController', () => {
  let controller: DepartmentEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentEmployeeController],
      providers: [DepartmentEmployeeService],
    }).compile();

    controller = module.get<DepartmentEmployeeController>(DepartmentEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
