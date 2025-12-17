import { Test, TestingModule } from '@nestjs/testing';
import { BusinessEmployeeController } from './business-employee.controller';
import { BusinessEmployeeService } from './business-employee.service';

describe('BusinessEmployeeController', () => {
  let controller: BusinessEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessEmployeeController],
      providers: [BusinessEmployeeService],
    }).compile();

    controller = module.get<BusinessEmployeeController>(BusinessEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
