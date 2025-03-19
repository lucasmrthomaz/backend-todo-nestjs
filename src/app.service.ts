import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    return 'Aplicação de TodoList com NestJS com recursos de RBAC :)';
  }
}
