import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { LocationController } from './location.controller';
import { LocationEntity } from './location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity], DBNameConnection)],
  providers: [LocationService, LocationResolver],
  controllers: [LocationController],
})
export class LocationModule {}
