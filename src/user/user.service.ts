import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserInterface } from './interface/User.interface';
import * as bcrypt from 'bcryptjs';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

@Injectable()
export class UserService {
  private saltRounds = 10;
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}
  public async findAll(): Promise<UserInterface[]> {
    return await  this.userRepository.find({
      relations: ['id_rol'],
    });
  }
  public async findOneAuth(loginDTO: JwtPayload): Promise<UserInterface> {
    const user: any = await  this.userRepository.findOne({ where: { email: loginDTO.email } });
    if (!user) {
      throw new HttpException({
        status: 403,
        error: 'Email o password es Incorrecto.',
      }, 403);
    } else {
      const password = await this.compareHash(loginDTO.password, user.password);
      if (password) {
           return user;
      } else {
        throw new HttpException({
          status: 403,
          error: 'Email o password es Incorrecto.',
        }, 403);
      }
    }
  }
  public async createUser(createuserDTO: CreateUserDTO): Promise<UserInterface> {
    createuserDTO.password = await this.getHash(createuserDTO.password);
    const user = await  this.userRepository.save(createuserDTO);
    return user;
    // const newProduct = new this.userRepository(createProductDTO);
    // return newProduct.save();
  }
  public async findOneByToken(toke: any) {
    return 0;
  }

  public async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  public async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
