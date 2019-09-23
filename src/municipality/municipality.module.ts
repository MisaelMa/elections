import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityResolver } from './municipality.resolver';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalityEntity } from './municipality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalityEntity])],
  providers: [MunicipalityService, MunicipalityResolver],
  controllers: [MunicipalityController],
})
export class MunicipalityModule {}
