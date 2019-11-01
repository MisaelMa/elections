import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { ServingEntity } from '../serving/serving.entity';
import { Column } from 'typeorm';

define(ServingEntity, (faker: typeof Faker, settings: { roles: string[] }) => {
  const lastName = faker.name.jobArea();
  const time = new Date();
  const serving = new ServingEntity();
  serving.name = lastName;
  serving.duration = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
  serving.isActive = 1;
  serving.price = 200;
  serving.priceWithIVA = 300;
  serving.sessions = 3;
  return serving;
});
