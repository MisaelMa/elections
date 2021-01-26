import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Route } from './entities/route.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class RoutesService extends TypeOrmCrudService<Route> {
    constructor(
      @InjectRepository(Route, DBNameConnection) readonly repo: Repository<Route>,
    ) {
        super(repo);
    }

    public getRoots() {
        return this.repo.find();
    }
}
