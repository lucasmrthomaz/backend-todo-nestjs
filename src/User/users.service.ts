import { Injectable } from '@nestjs/common';

// This is a real interface representing a user entity
export interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test',
      password: 'test',
    },
    {
      userId: 2,
      username: 'admin',
      password: 'admin',
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
