import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { CountryResolver } from './country.resolver';
import { CountryEntity } from './country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountryService, CountryResolver],
  controllers: [CountryController],
})
export class CountryModule {}
