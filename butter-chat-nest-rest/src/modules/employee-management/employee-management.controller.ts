import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeManagementService } from './employee-management.service';
import { CreateEmployeeManagementDto } from './dto/create-employee-management.dto';
import { UpdateEmployeeManagementDto } from './dto/update-employee-management.dto';

@Controller('employee-management')
export class EmployeeManagementController {
  constructor(private readonly employeeManagementService: EmployeeManagementService) {}

  @Post()
  create(@Body() createEmployeeManagementDto: CreateEmployeeManagementDto) {
    return this.employeeManagementService.create(createEmployeeManagementDto);
  }

  @Get()
  findAll() {
    return this.employeeManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeManagementDto: UpdateEmployeeManagementDto) {
    return this.employeeManagementService.update(+id, updateEmployeeManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeManagementService.remove(+id);
  }
}
