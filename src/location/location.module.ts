import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationResolver } from './location.resolver';
import { LocationController } from './location.controller';
import { LocationEntity } from './location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LocationEntity])],
  providers: [LocationService, LocationResolver],
  controllers: [LocationController],
})
export class LocationModule {}
