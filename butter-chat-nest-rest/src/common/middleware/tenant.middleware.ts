import { Injectable, NestMiddleware } from "@nestjs/common";
import { TenantResolver } from "../../data-source-module/tanents/tenant.resolver";
import { TenantConnectionService } from "../../data-source-module/tanents/tenant-connection.service";

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(
    private tenantResolver: TenantResolver,
    private tenantConnService: TenantConnectionService,
  ) {}

  async use(req: any, res: any, next: () => void) {
    const companyId = req.user["sub"];
    const dbName = await this.tenantResolver.resolve(companyId);
    req.tenantDb = await this.tenantConnService.getConnection(dbName);
   
    next();
  }
}
