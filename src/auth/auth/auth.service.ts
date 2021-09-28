import { Injectable } from '@nestjs/common';

const users = [
    {
        id: 1,
        username: 'admin',
        password: '$2b$10$hAXI2WHntBBnPdvwmdGJFO9Wqwjc0LHxPv4S67mmCFhu8qzuautKW',
        role: 'admin',
    },
    {
        id: 2,
        username: 'user',
        password: '$2b$10$hAXI2WHntBBnPdvwmdGJFO9Wqwjc0LHxPv4S67mmCFhu8qzuautKW',
        role: 'user',
    },
];

@Injectable()
export class AuthService {

    login(username: string, password: string) {
        console.log(username, password);
    }

    // async validateUser(username: string, password: string): Promise<any> {
    //     const user = users.find(
    //         (u) => u.username === username && u.password === password,
    //     );
    //     if (!user) {
    //         return null;
    //     }
    //     return user;
    // }
}
