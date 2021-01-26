import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './country.entity';
import { Repository } from 'typeorm';
import { DBNameConnection } from '../database/agendadb.service';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity, DBNameConnection) private readonly countryRepository: Repository<CountryEntity>,
  ) {
  }

  async findAll(): Promise<CountryEntity[]> {
    return await this.countryRepository.find({
      where: {
        states: {
          id: 2,
        },
      },
      relations: ['states', 'states.municipalitys', 'states.municipalitys.locations'],
    });
  }
}
