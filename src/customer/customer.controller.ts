import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CustomerEntity } from './customer.entity';
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
}
