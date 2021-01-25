import { Controller, Get, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CustomerEntity, TypeOfPeople } from './customer.entity';
import { CustomerService } from './customer.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: CustomerEntity,
  },
  query: {
    join: {
      section: {},
      zona: {},
      user: {},
    },
  },
})
@Controller('elections/customer')
export class CustomerController implements CrudController<CustomerEntity> {
  constructor(public service: CustomerService) {
  }

  @Get('dashboard/count')
  async dasbboardCount() {
    const respuesta = {
      activista: 0,
      promovido: 0,
      lider: 0,
    };

    respuesta.lider = await this.service.count({ where: { typeOfPeople: TypeOfPeople.Lider } });
    respuesta.activista = await this.service.count({ where: { typeOfPeople: TypeOfPeople.Activista } });
    respuesta.promovido = await this.service.count({ where: { typeOfPeople: TypeOfPeople.Promovido } });
    return respuesta;
  }
}
