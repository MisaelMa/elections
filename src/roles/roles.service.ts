import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Role } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class RolesService extends TypeOrmCrudService<Role> {
    constructor(
      @InjectRepository(Role, DBNameConnection) repo: Repository<Role>,
    ) {
        super(repo);
    }
}
