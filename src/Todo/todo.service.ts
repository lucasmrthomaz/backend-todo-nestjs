import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaClient) {}

  getHelloVisitor(): string {
    return 'Hello from TodoService!';
  }

  getHelloAdmin(): string {
    return 'Hello GOD! The awesome Admin!';
  }

  async getTodos(): Promise<any[]> {
    return await this.prisma.tasks.findMany();
  }

  async getTodoById(id: string): Promise<any> {
    return await this.prisma.tasks.findUnique({
      where: { id },
    });
  }

  async createTodo(data: {
    title: string;
    description?: string;
    status: string;
  }): Promise<any> {
    return await this.prisma.tasks.create({
      data,
    });
  }

  async updateTodo(
    id: string,
    data: { title?: string; description?: string },
  ): Promise<any> {
    return await this.prisma.tasks.update({
      where: { id },
      data,
    });
  }

  async deleteTodo(id: string): Promise<any> {
    return await this.prisma.tasks.delete({
      where: { id },
    });
  }

  async listAllTodos(): Promise<any[]> {
    return await this.prisma.tasks.findMany();
  }

  async getTodoStatus(id: string): Promise<string | null> {
    const todo = await this.prisma.tasks.findUnique({
      where: { id },
      select: { status: true },
    });
    return todo?.status || null;
  }
}
