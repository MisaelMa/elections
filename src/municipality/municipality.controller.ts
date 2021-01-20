import { Controller, Get } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { MunicipalityEntity } from './municipality.entity';

@Crud({
  model: {
    type: MunicipalityEntity,
  },
})
@Controller('mexico/municipality')
export class MunicipalityController implements CrudController<MunicipalityEntity> {
  constructor(public service: MunicipalityService) {
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
