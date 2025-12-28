import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';
import { ResponseInterface } from '../../common/interface/response-interface';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    @ApiOperation({ summary: 'Create role' })
    @ApiResponse({ status: 201, description: 'Role created successfully' })
    create(@Body() dto: CreateRoleDto): Promise<ResponseInterface> {
        return this.roleService.create(dto);
    }
    
    // for the admins...
    // need to implement security guards...
    // -> only studio butter fly can get this...
    @Get()
    @ApiOperation({ summary: 'Get all roles' })
    findAll(): Promise<ResponseInterface> {
        return this.roleService.findAll();
    }

    @Get('company/:companyId')
    @ApiOperation({ summary: 'Get roles by company' })
    @ApiParam({ name: 'companyId', format: 'uuid' })
    findByCompany(
        @Param('companyId', ParseUUIDPipe) companyId: string,
    ): Promise<ResponseInterface> {
        return this.roleService.findByCompany(companyId);
    }
}

