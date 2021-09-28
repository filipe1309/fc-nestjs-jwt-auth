import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

//@UseGuards(JwtGuard)
@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    login(@Body() body) {
        return { token: this.authService.login(body.username, body.password) };
    }

    @UseGuards(JwtGuard)
    @Get('test-auth')
    test() {
        return { message: 'test' };
    }

}
