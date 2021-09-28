import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { jwtConstants } from './constants';

@Module({
  imports: [
    ConfigModule,
    JwtModule
      .register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expiration },
      }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService]
})
export class AuthModule { }
