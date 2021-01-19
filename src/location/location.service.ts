import { Injectable } from '@nestjs/common';
import { LocationEntity } from './location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class LocationService extends TypeOrmCrudService<LocationEntity> {
  constructor(@InjectRepository(LocationEntity) repo) {
    super(repo);
  }

  async findAll(): Promise<LocationEntity[]> {
    return [];
  }
}
