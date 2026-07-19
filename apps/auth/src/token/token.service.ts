import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(user: UserEntity) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        expiresIn: '15m',
      }),

      this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async verifyRefreshToken(refreshToken: string) {
    return this.jwtService.verifyAsync<JwtPayload>(refreshToken);
  }

  async hashRefreshToken(refreshToken: string) {
    return bcrypt.hash(refreshToken, 10);
  }

  async compareRefreshToken(refreshToken: string, hashedRefreshToken: string) {
    return bcrypt.compare(refreshToken, hashedRefreshToken);
  }
}
