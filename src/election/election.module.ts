import { Module } from '@nestjs/common';
import { ElectionService } from './election.service';
import { ElectionResolver } from './election.resolver';
import { ElectionController } from './election.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElectionEntity } from './election.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({

  imports: [TypeOrmModule.forFeature([ElectionEntity], DBNameConnection)],
  providers: [ElectionService, ElectionResolver],
  controllers: [ElectionController],
})
export class ElectionModule {}
