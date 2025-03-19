import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/Auth/auth.guard';
import { RBAC_Roles } from 'src/Auth/RBAC/rbac.roles';
import { Roles } from 'src/Auth/RBAC/roles.decorators';
import { RolesGuard } from 'src/Guard/roles.guard';
import { TodoService } from 'src/Todo/todo.service';

@Controller('todo')
@UseGuards(RolesGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @Public()
  getHelloVisitor(): string {
    return this.todoService.getHelloVisitor();
  }

  @Get('testadmin')
  @Roles(RBAC_Roles.Admin)
  testAdmin(): string {
    return this.todoService.getHelloAdmin();
  }

  @Get('all')
  listAllTodos(): Promise<any[]> {
    return this.todoService.listAllTodos();
  }

  @Get('todo/:id')
  async getTodoById(@Param('id') id: string): Promise<any> {
    return await this.todoService.getTodoById(id);
  }

  @Get('todoStatus/:id')
  async getTodoStatus(@Param('id') id: number): Promise<string | null> {
    return await this.todoService.getTodoStatus(id.toString());
  }

  @Post('create')
  async createTodo(
    @Body() data: { title: string; description?: string },
  ): Promise<any> {
    return await this.todoService.createTodo({ ...data, status: 'pending' });
  }

  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: string): Promise<any> {
    return await this.todoService.deleteTodo(id);
  }
}
