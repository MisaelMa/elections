import { Injectable } from '@nestjs/common';
import { UserService } from '.././user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { AcTokenDto } from '../accesstokens/dto/AcToken.dto';
import { UserInterface } from '../user/interface/User.interface';
import { JwtPayloadDecode } from './interfaces/JwtPayloadDecode.interface';
import { AccesstokensService } from '../accesstokens/accesstokens.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService,
              private readonly accesstokensService: AccesstokensService,
              private readonly jwtService: JwtService) {
  }

  public async signIn(userAuth: JwtPayload) {
    try {
      const user: UserInterface = await this.usersService.findOneAuth(userAuth);
      delete user.address;
      delete user.telephone;
      delete user.electorkey;
      delete user.password;
      const data = JSON.stringify(user);
      const accessToken = this.jwtService.sign({ data }, { expiresIn: 7200 }); // seconds
      const decodeToken: any | JwtPayloadDecode = this.jwtService.decode(accessToken);
      const AccesToken: AcTokenDto = {
        user_id: user.id,
        name: user.firstname,
        token: accessToken,
        revoked: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        expiresAt: decodeToken.exp,
      };
      await this.accesstokensService.createAccesToken(AccesToken);
      return {
        accessToken,
      };
    } catch (e) {
      return e.message;
    }
  }

  async validateUser(token: JwtPayload): Promise<any> {
    return true;
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // return await this.usersService.findOneByToken(token);
  }
}
