import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserInterface } from './interface/User.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private saltRounds = 10;
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findAll(): Promise<UserInterface[]> {
    return await  this.userRepository.find({
      relations: ['id_rol'],
    });
  }
  async createUser(createuserDTO: CreateUserDTO): Promise<UserInterface> {
    createuserDTO.password = await this.getHash(createuserDTO.password);
    const user = await  this.userRepository.save(createuserDTO);
    return user;
    // const newProduct = new this.userRepository(createProductDTO);
    // return newProduct.save();
  }
  async findOneByToken(toke: any) {
    return 0;
  }

  async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
