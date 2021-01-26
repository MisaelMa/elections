import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SectionEntity } from './section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class SectionService extends TypeOrmCrudService<SectionEntity> {
  constructor(@InjectRepository(SectionEntity, DBNameConnection) repo) {
    super(repo);
  }
}
