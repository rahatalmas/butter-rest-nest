import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { AuthGuard } from '../auth/auth.guard';
import { TenantGuard } from '../../data-source-module/tanents/tanant.guard';

@ApiTags('company')
@ApiBearerAuth()
@UseGuards(AuthGuard,TenantGuard)
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  //controller for creating a new department...
  @ApiOperation({ summary: 'Create company profile' })
  @Post()
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @Req() req,
  ) {
    console.log("request.user: ",req.user)
    const registryId = req.user['sub'];
    const tenantDb = req.tenantDb;
    return this.companyService.createCompany(
      createCompanyDto,
      registryId,
      tenantDb
    );
  }

  //for getting company profile data...
  @ApiOperation({ summary: 'Get my company profile' })
  @Get()
  findMyCompany(@Req() req) {
    console.log("getting company data...")
    const registryId = req.user['sub'];
    const db = req.tenantDb;
    console.log(db.options)
    return this.companyService.findByRegistryId(registryId);
  }

  @ApiOperation({ summary: 'Update company profile' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @Req() req,
  ) {
    const registryId = req.user['sub'];
    const tenantDb = req.tenantDb;
    return {registryId,tenantDb}
    // return this.companyService.updateCompany(
    //   id,
    //   updateCompanyDto,
    //   registryId,
    // );
  }
}
