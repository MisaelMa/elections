import { Controller, Get } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Bussiness } from './entities/bussiness.entity';
import { BusinessService } from './business.service';

@Crud({
  model: {
    type: Bussiness,
  },
})
@Controller('business')
export class BusinessController implements CrudController<Bussiness> {
  constructor(
    readonly service: BusinessService,
  ) {
  }

  get base(): CrudController<Bussiness> {
    return this;
  }
}
