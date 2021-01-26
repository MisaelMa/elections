import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityResolver } from './municipality.resolver';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalityEntity } from './municipality.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalityEntity], DBNameConnection)],
  providers: [MunicipalityService, MunicipalityResolver],
  controllers: [MunicipalityController],
  exports: [MunicipalityService],
})
export class MunicipalityModule {}
