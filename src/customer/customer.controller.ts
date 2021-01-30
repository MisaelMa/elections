import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CustomerEntity, TypeOfPeople } from './customer.entity';
import { CustomerService } from './customer.service';
import { Response } from 'express';
import { ReporteCustomer } from './reporte/reporteCustomer';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: CustomerEntity,
  },
  query: {
    join: {
      state: {},
      municipality: {},
      zona: {},
      section: {},
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

  @Get('report')
  async report(@Req() req, @Res() res: Response, @Query() query: {
    stateId: number,
    municipalityId: number,
    zonaId: number,
    seccionId: number,
    typePerson: number,
  }) {

    const customer = this.service.repo.createQueryBuilder('customer');
    customer.leftJoinAndSelect('customer.state', 'state');
    customer.leftJoinAndSelect('customer.municipality', 'municipality');
    customer.leftJoinAndSelect('customer.zona', 'zona');
    customer.leftJoinAndSelect('customer.section', 'section');

    if (query.stateId && query.stateId !== 0 && query.stateId.toString() !== '0') {
      customer.where('state.id = :id', {
        id: query.stateId,
      });
    }

    if (query.municipalityId && query.municipalityId !== 0 && query.municipalityId.toString() !== '0') {
      customer.where('municipality.id = :id', {
        id: query.municipalityId,
      });
    }

    if (query.zonaId && query.zonaId !== 0 && query.zonaId.toString() !== '0') {
      customer.where('zona.id = :id', {
        id: query.zonaId,
      });
    }

    if (query.seccionId && query.seccionId !== 0 && query.seccionId.toString() !== '0') {
      customer.where('section.id = :id', {
        id: query.seccionId,
      });
    }

    if (query.typePerson && query.typePerson !== 0 && query.typePerson.toString() !== '0') {
      customer.where('typeOfPeople = :type', {
        type: query.typePerson,
      });
    }

    const reporte = await customer.getMany();
    res.send({ src: await new ReporteCustomer().generate(reporte) });
  }
}
