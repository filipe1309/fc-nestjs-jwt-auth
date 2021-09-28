import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';

@Module({
  controllers: [LoginController]
})
export class AuthModule {}
