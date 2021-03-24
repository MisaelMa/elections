import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Route } from '../routes/entities/route.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteAction } from './entities/route-action.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class RouteActionService extends TypeOrmCrudService<RouteAction> {
    constructor(
        @InjectRepository(RouteAction, DBNameConnection) readonly repo: Repository<RouteAction>,
    ) {
        super(repo);
    }

}

