import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';

@Crud({
  model: {
    type: CustomerEntity,
  },
})
@Controller('elections/customer')
export class CustomerController implements CrudController<CustomerEntity> {
  constructor(public service: CustomerService) {
  }
}
