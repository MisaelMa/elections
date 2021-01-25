/* tslint:disable:object-literal-key-quotes */
import { Controller, UseGuards } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { MunicipalityEntity } from './municipality.entity';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: MunicipalityEntity,
  },
  query: {
    join: {
      state: {},
      locations: {},
      'locations.muncipality': {},
      'locations.sections': {},
      'locations.people': {},
    },
  },
})
@Controller('mexico/municipality')
export class MunicipalityController implements CrudController<MunicipalityEntity> {
  constructor(public service: MunicipalityService) {
  }

}
