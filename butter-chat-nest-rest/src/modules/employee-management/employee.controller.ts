import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmployeeManagementService } from './employee.service';
import { CreateEmployeeManagementDto } from './dto/create-employee-management.dto';
import { UpdateEmployeeManagementDto } from './dto/update-employee-management.dto';
import { TenantGuard } from '../../data-source-module/tanents/tanant.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('employee management')
@ApiBearerAuth()
@UseGuards(AuthGuard,TenantGuard)
@Controller('employee')
export class EmployeeManagementController {
  //constructor(private readonly employeeManagementService: EmployeeManagementService) {}

  @Post('add')
  create(@Body() createEmployeeManagementDto: CreateEmployeeManagementDto) {
    return 'add employee'
  }
}
