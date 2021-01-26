import { Injectable } from '@nestjs/common';
import { LocationEntity } from './location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class LocationService extends TypeOrmCrudService<LocationEntity> {
  constructor(@InjectRepository(LocationEntity, DBNameConnection) repo) {
    super(repo);
  }

  async findAll(): Promise<LocationEntity[]> {
    return [];
  }
}
