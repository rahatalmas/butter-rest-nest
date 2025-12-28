import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TenantResolver } from './tenant.resolver';
import { TenantConnectionService } from './tenant-connection.service';

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,             // used to read decorators
    private readonly tenantResolver: TenantResolver,
    private readonly tenantConnService: TenantConnectionService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    // //Check if route has @SkipTenant()
    // const skip = this.reflector.get<boolean>('skipTenant', context.getHandler());
    // if (skip) return true;

    //Require companyId from JWT
    const companyId = req.user["sub"];
    if (!companyId) throw new UnauthorizedException('No companyId found');

    //Resolve tenant Db
    const dbName = await this.tenantResolver.resolve(companyId);
    if (!dbName) throw new ForbiddenException('Tenant DB not found or company inactive');

    //Attach tenant DB to request
    req.tenantDb = await this.tenantConnService.getConnection(dbName);

    return true;
  }
}
