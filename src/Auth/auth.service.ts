import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../User/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = this.usersService.findOne(username) as User | undefined;
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?.id, username: user?.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
