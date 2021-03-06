import { Controller, Get, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { StateEntity } from './state.entity';
import { StateService } from './state.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: StateEntity,
  },
  query: {
    join: {
      country: {},
      municipalitys: {},
    },
  },
})
@Controller('mexico/state')
export class StateController implements CrudController<StateEntity> {
  constructor(public service: StateService) {
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
