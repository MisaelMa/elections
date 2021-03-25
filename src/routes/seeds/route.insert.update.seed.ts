import { Factory, Seeder, times } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import routes from './route.catalogue';
import { Route } from '../entities/route.entity';

export default class RouteInsertUpdateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.getRepository(Route).save(routes);
  }
}
