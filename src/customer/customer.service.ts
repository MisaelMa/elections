import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService extends TypeOrmCrudService<CustomerEntity> {
  constructor(@InjectRepository(CustomerEntity) repo) {
    super(repo);
  }
}
