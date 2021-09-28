import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users = [
    {
        id: 1,
        username: 'admin@admin.com',
        password: '$2b$10$hAXI2WHntBBnPdvwmdGJFO9Wqwjc0LHxPv4S67mmCFhu8qzuautKW',
        role: 'admin',
    },
    {
        id: 2,
        username: 'user@user.com',
        password: '$2b$10$hAXI2WHntBBnPdvwmdGJFO9Wqwjc0LHxPv4S67mmCFhu8qzuautKW',
        role: 'user',
    },
];

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) { }

    login(username: string, password: string) {
        const user = this.validateCredentials(username, password);
        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role,
        };

        return this.jwtService.sign(payload);
    }

    validateCredentials(username: string, password: string) {
        const user = users.find(
            (u) => u.username === username && bcrypt.compareSync(password, u.password),
        );
        if (!user) {
            return null;
        }
        return user;
    }
}
