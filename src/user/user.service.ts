import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { UpdatePasswordDto } from './dto/UpdatePassword.dto';
import { UserEntity } from './user.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity, DBNameConnection) readonly repo: Repository<UserEntity>,
  ) {
    super(repo);
  }

  public async create(createUserDto: Partial<UserEntity>): Promise<UserEntity> {
    createUserDto.password = await hash(createUserDto.password, 8);
    return this.repo.create({ ...createUserDto });
  }

  public async changePassword(createUserDto: UpdatePasswordDto): Promise<UserEntity> {
    createUserDto.password = await hash(createUserDto.password, 8);
    return this.repo.create({ ...createUserDto });
  }

  public async save(user: UserEntity): Promise<UserEntity> {
    return this.repo.save(user);
  }

}
