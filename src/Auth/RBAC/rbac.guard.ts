
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RBAC_Roles } from './rbac.roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(RBAC_Roles, context.getHandler());
    
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    return this.matchRoles(roles, user.roles);
  }

  private matchRoles(allowedRoles: RBAC_Roles[], userRoles: RBAC_Roles[]): boolean {
    return userRoles.some(role => allowedRoles.includes(role));
  }
}
