import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registry } from '../../modules/auth/entities/registry.entity';

@Injectable()
export class TenantResolver {
  constructor(
    @InjectRepository(Registry, 'MASTER_DB')
    private registryRepo: Repository<Registry>,
  ) {}

  async resolve(companyId: string) {
    const registry = await this.registryRepo.findOneBy({ id: companyId });

    if (!registry || registry.status !== 'ACTIVE') {
      throw new UnauthorizedException();
    }

    return registry.db_name;
  }
}
