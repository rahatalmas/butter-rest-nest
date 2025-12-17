import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentEmployeeService } from './department-employee.service';
import { CreateDepartmentEmployeeDto } from './dto/create-department-employee.dto';
import { UpdateDepartmentEmployeeDto } from './dto/update-department-employee.dto';

@Controller('department-employee')
export class DepartmentEmployeeController {
  constructor(private readonly departmentEmployeeService: DepartmentEmployeeService) {}

  @Post()
  create(@Body() createDepartmentEmployeeDto: CreateDepartmentEmployeeDto) {
    return this.departmentEmployeeService.create(createDepartmentEmployeeDto);
  }

  @Get()
  findAll() {
    return this.departmentEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentEmployeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentEmployeeDto: UpdateDepartmentEmployeeDto) {
    return this.departmentEmployeeService.update(+id, updateDepartmentEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentEmployeeService.remove(+id);
  }
}
