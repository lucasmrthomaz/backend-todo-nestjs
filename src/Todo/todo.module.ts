import { Module } from '@nestjs/common';
import { AuthService } from '../Auth/auth.service';
import { UsersModule } from '../User/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../Auth/auth.controller';
import { jwtConstants } from '../Auth/auth.static.constants';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    TodoService,
    {
      provide: PrismaClient,
      useValue: new PrismaClient(), // Register PrismaClient as a provider
    },
  ],
  controllers: [AuthController, TodoController],
  exports: [TodoService], // Export if needed in other modules
})
@Module({
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService], // Export if needed in other modules
})
export class TodoModule {}
