import { Controller, UseGuards } from '@nestjs/common';
import { LocationService } from './location.service';
import { Crud, CrudController } from '@nestjsx/crud';
import { LocationEntity } from './location.entity';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
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
