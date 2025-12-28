import { SetMetadata } from '@nestjs/common';

export const SKIP_TENANT = 'skipTenant';
export const SkipTenant = () => SetMetadata(SKIP_TENANT, true);
