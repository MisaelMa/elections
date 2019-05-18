import { Injectable } from '@nestjs/common';
import { UserService } from '.././user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

  async signIn() {
    const user: JwtPayload = { email: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(token: JwtPayload): Promise<any> {
    return  true;
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // return await this.usersService.findOneByToken(token);
  }
}
