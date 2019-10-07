import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { CustomerEntity } from '../customer/customer.entity';
import { Column } from 'typeorm';
define(CustomerEntity, (faker: typeof Faker, settings: { roles: string[] }) => {
  const gender = faker.random.number(1)
  const firstName = faker.name.firstName(gender)
  const lastName = faker.name.lastName(gender)
  const email = faker.internet.email(firstName, lastName)

  const user = new CustomerEntity()
  user.name  = firstName;
  user.lastNameFather  = firstName;
  user.lastNameMother =  firstName;
  user.isActive =  1;
  user.email =  firstName;
  user.phone =  firstName;
  user.age =  1;
  user.age =  1;
  user.gender =  firstName;
  user.address =  firstName;
  user.bloodType =  firstName;
  user.birthdate =  new Date();
  user.searchName =  firstName;
  user.profilePicture = firstName;
  return user;
})
