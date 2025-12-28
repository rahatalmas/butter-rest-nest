import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Req, UseGuards } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseInterface } from '../../common/interface/response-interface';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags('department')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create department' })
  @ApiResponse({ status: 201, description: 'department created successfully' })
  create(@Body() createDepartmentDto: CreateDepartmentDto,@Req() req) {
    const companyId = req.user['sub'];
    return this.departmentService.create(createDepartmentDto,companyId);
  }

  //for studio butterfly admins only...
  @Get()
  @ApiOperation({ summary: 'Get all departments' })
  findAll(): Promise<ResponseInterface> {
      return this.departmentService.findAll();
  }

  @Get('company/:companyId')
  @ApiOperation({ summary: 'Get department by company' })
  @ApiParam({ name: 'companyId', format: 'uuid' })
  findByCompany(
      @Param('companyId', ParseUUIDPipe) companyId: string,
  ): Promise<ResponseInterface> {
      return this.departmentService.findByCompany(companyId);
  }
}
