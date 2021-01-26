import { Injectable } from '@nestjs/common';
import { StateEntity } from './state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class StateService extends TypeOrmCrudService<StateEntity> {
  constructor(@InjectRepository(StateEntity, DBNameConnection) repo) {
    super(repo);
  }

  async findAll(): Promise<StateEntity[]> {
    return await this.repo.find({
      relations: ['municipalitys', 'municipalitys.locations'],
    });
  }
}
