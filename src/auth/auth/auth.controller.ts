import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    login(@Body() body) {
        return { token: this.authService.login(body.username, body.password) };
    }

    @Get('test-auth')
    test() {
        return { message: 'test' };
    }

}
