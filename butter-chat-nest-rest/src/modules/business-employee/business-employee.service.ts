import { Injectable } from '@nestjs/common';
import { CreateBusinessEmployeeDto } from './dto/create-business-employee.dto';
import { UpdateBusinessEmployeeDto } from './dto/update-business-employee.dto';

@Injectable()
export class BusinessEmployeeService {
  create(createBusinessEmployeeDto: CreateBusinessEmployeeDto) {
    return 'This action adds a new businessEmployee';
  }

  findAll() {
    return `This action returns all businessEmployee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessEmployee`;
  }

  update(id: number, updateBusinessEmployeeDto: UpdateBusinessEmployeeDto) {
    return `This action updates a #${id} businessEmployee`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessEmployee`;
  }
}
