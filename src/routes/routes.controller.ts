import { Controller, Get, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Route } from './entities/route.entity';
import { RoutesService } from './routes.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Crud({
  model: {
    type: Route,
  },
  query: {
    join: {
      'routeActions': {},
      'routeActions.action': {},
      'permissions': {},
    },
  },
})
@Controller('system/routes')
export class RoutesController implements CrudController<Route> {
  constructor(
    readonly service: RoutesService,
  ) {
  }

  get base(): CrudController<Route> {
    return this;
  }

  @Get('roots')
  async getRoots() {
    // return 'hola';
    return await this.service.getRoots();
  }
}
