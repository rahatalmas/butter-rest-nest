import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessEmployeeService } from './business-employee.service';
import { CreateBusinessEmployeeDto } from './dto/create-business-employee.dto';
import { UpdateBusinessEmployeeDto } from './dto/update-business-employee.dto';

@Controller('business-employee')
export class BusinessEmployeeController {
  constructor(private readonly businessEmployeeService: BusinessEmployeeService) {}

  @Post()
  create(@Body() createBusinessEmployeeDto: CreateBusinessEmployeeDto) {
    return this.businessEmployeeService.create(createBusinessEmployeeDto);
  }

  @Get()
  findAll() {
    return this.businessEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessEmployeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessEmployeeDto: UpdateBusinessEmployeeDto) {
    return this.businessEmployeeService.update(+id, updateBusinessEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessEmployeeService.remove(+id);
  }
}
