import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Action } from './entities/action.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class ActionsService extends TypeOrmCrudService<Action> {
    constructor(
      @InjectRepository(Action, DBNameConnection) readonly repo: Repository<Action>,
    ) {
        super(repo);
    }
}
