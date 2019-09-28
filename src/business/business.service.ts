import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Bussiness } from './entities/bussiness.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessService extends TypeOrmCrudService<Bussiness> {
  constructor(
    @InjectRepository(Bussiness) readonly repo: Repository<Bussiness>,
  ) {
    super(repo);
  }
}
