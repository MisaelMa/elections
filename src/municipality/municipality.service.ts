import { Injectable } from '@nestjs/common';
import { MunicipalityEntity } from './municipality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class MunicipalityService extends TypeOrmCrudService<MunicipalityEntity> {
  constructor(@InjectRepository(MunicipalityEntity, DBNameConnection) repo) {
    super(repo);
  }

  async findAll(): Promise<MunicipalityEntity[]> {
    return await this.repo.find({
      relations: ['locations'],
    });
  }
}
