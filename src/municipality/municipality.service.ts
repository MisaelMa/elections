import { Injectable } from '@nestjs/common';
import { MunicipalityEntity } from './municipality.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class MunicipalityService extends TypeOrmCrudService<MunicipalityEntity> {
  constructor(@InjectRepository(MunicipalityEntity) repo) {
    super(repo);
  }

  async findAll(): Promise<MunicipalityEntity[]> {
    return await this.repo.find({
      relations: ['locations'],
    });
  }
}
