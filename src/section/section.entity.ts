import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { LocationEntity } from '../location/location.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('section')
export class SectionEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => LocationEntity, location => location.sections, {
    cascade: ['insert'],
  })
  location: MunicipalityEntity;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(type => CustomerEntity, people => people.section)
  people: CustomerEntity[];

}
