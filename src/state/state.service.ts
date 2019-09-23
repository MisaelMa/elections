import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StateEntity } from './state.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(StateEntity) private readonly stateRepository: Repository<StateEntity>,
  ) {}
  async findAll(): Promise<StateEntity[]> {
    return await this.stateRepository.find({
      relations: ['municipalitys', 'municipalitys.locations'],
    });
  }
}
