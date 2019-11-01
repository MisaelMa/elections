import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import { CustomerEntity } from '../customer/customer.entity';
import { ServingEntity } from '../serving/serving.entity';

export class CreateServingSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(ServingEntity)().seedMany(10);
  }
}
