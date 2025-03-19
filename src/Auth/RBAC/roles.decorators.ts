
import { SetMetadata } from '@nestjs/common';
import { RBAC_Roles } from './rbac.roles';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RBAC_Roles[]) => SetMetadata(ROLES_KEY, roles);
