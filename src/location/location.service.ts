import { Injectable } from '@nestjs/common';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { Repository } from 'typeorm';
import { LocationEntity } from './location.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(LocationEntity) private readonly locationRepository: Repository<LocationEntity>,
  ) {}
  async findAll(): Promise<LocationEntity[]> {
    return await this.locationRepository.find({
      relations: ['sections'],
    });
  }
}
