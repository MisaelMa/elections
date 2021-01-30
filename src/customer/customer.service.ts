import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { DBNameConnection } from '../database/agendadb.service';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService extends TypeOrmCrudService<CustomerEntity> {
  constructor(@InjectRepository(CustomerEntity, DBNameConnection) readonly repo: Repository<CustomerEntity>) {
    super(repo);
  }
}
