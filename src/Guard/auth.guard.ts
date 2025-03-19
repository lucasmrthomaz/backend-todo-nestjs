import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/Auth/auth.static.constants';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    private validateRequest(request: any): boolean {
        const authHeader = request.headers['authorization'];
        if (!authHeader) {
            return false;
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return false;
        }

        try {
            const decoded = jwt.verify(token, jwtConstants.secret);
            request.user = decoded;
            return true;
        } catch (error) {
            return false;
        }
    }
}
