import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserEntity } from '../user/user.entity';
import { PayloadToken } from '../common/types/jwt';

interface UserBody {
  name: string;
  email: string;
  passw: string;
  lastnameFather: string;
  lastnameMother: string;
  department: number;
  role: number;
  campus: number;
  status: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  public async registerUserIfNotExist(userBody: UserBody): Promise<any> {
    const { name, email, passw, lastnameMother, lastnameFather, status } = userBody;
    let user: UserEntity | undefined = await this.usersService.findOne({ email });

    if (user && await bcrypt.compare(passw, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    user = await this.usersService.save(await this.usersService.create({
      lastname: lastnameFather + ' ' + lastnameMother,
      firstname: name,
      email,
      password: passw,
    }));
    if (user) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async validateUser(email: string, passw: string): Promise<Partial<UserEntity> | null> {
    // const user: User | undefined = await this.usersService
    //     .findOne({ email }, {
    //         relations: [
    //             'role',
    //             'campus',
    //             'department',
    //             'role.permissions',
    //             'role.permissions.route',
    //             'role.permissions.actions',
    //         ],
    //     });
    const user: UserEntity | undefined = await this.usersService.repo.createQueryBuilder('users')
      .where('users.email = :email', { email })
      .getOne();
    if (user && bcrypt.compareSync(passw, user.password.replace('$2y$', '$2a$'))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  generateJWT(user: Partial<UserEntity>): { access_token: string, decode: PayloadToken | any } {
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
      decode: this.jwtService.decode(token),
    };
  }
}
