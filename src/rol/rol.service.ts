import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RolEntity } from './rol.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(RolEntity) private readonly rolRepository: Repository<RolEntity>,
  ) {}
  async findAll(): Promise<RolEntity[]> {
    return await this.rolRepository.find();
  }
}
