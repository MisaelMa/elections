import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MunicipalityEntity } from './municipality.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectRepository(MunicipalityEntity) private readonly municipalityRepository: Repository<MunicipalityEntity>,
  ) {}
  async findAll(): Promise<MunicipalityEntity[]> {
    return await this.municipalityRepository.find({
      relations: ['locations'],
    });
  }
}
