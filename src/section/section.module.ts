import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';
import { SectionController } from './section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionEntity } from './section.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity],DBNameConnection)],
  providers: [SectionService, SectionResolver],
  controllers: [SectionController],
  exports: [SectionService],
})
export class SectionModule {
}
