import { Injectable } from '@nestjs/common';
import { StateEntity } from './state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class StateService extends TypeOrmCrudService<StateEntity> {
  constructor(@InjectRepository(StateEntity) repo) {
    super(repo);
  }

  async findAll(): Promise<StateEntity[]> {
    return await this.repo.find({
      relations: ['municipalitys', 'municipalitys.locations'],
    });
  }
}
