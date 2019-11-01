import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { CustomerEntity } from '../customer/customer.entity';
import { Column } from 'typeorm';

define(CustomerEntity, (faker: typeof Faker, settings: { roles: string[] }) => {
  const gender = faker.random.number(1);
  const avatar = faker.internet.avatar();
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);
  const phone = faker.phone;
  const email = faker.internet.email(firstName, lastName);

  const user = new CustomerEntity();
  user.name = firstName;
  user.lastNameFather = firstName;
  user.lastNameMother = lastName;
  user.isActive = 1;
  user.email = email;
  user.phone = phone.phoneNumber('5');
  user.age = faker.random.number(100);
  user.gender = gender.toString();
  user.address = faker.address.county() + ' ' + faker.address.city();
  user.bloodType = firstName;
  user.birthdate = new Date();
  user.searchName = firstName + ' ' + lastName;
  user.profilePicture = avatar;
  return user;
});
