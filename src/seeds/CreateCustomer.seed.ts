// @ts-ignore
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import { CustomerEntity } from '../customer/customer.entity';

export class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(CustomerEntity)().seedMany(10);
  }
}
