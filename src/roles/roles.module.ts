import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
  imports: [TypeOrmModule.forFeature([ Role ], DBNameConnection)],
  exports: [  RolesService ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
