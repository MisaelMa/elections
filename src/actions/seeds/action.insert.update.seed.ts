import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Action } from '../entities/action.entity';
import actions from './actions.catalogue';
import { Route } from '../../routes/entities/route.entity';
import routes from '../../routes/seeds/route.catalogue';

export default class ActionInsertUpdateSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection.getRepository(Action).save(actions);
    }
}

