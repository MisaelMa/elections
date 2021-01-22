import { Controller } from '@nestjs/common';
import { LocationService } from './location.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { LocationEntity } from './location.entity';

@Crud({
  model: {
    type: LocationEntity,
  },
  query: {
    join: {
      muncipality: {},
      sections: {},
      people: {},
    },
  },
})
@Controller('municipality/location')
export class LocationController implements CrudController<LocationEntity> {
  constructor(public service: LocationService) {
  }

}
