import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { LocationEntity } from '../location/location.entity';
import { CustomerEntity } from '../customer/customer.entity';
import { StateEntity } from '../state/state.entity';

@Entity('section')
export class SectionEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => StateEntity, state => state.sections, {
    cascade: ['insert'],
  })
  state: StateEntity;

  @ManyToOne(type => MunicipalityEntity, mun => mun.sections, {
    cascade: ['insert'],
  })
  municipality: MunicipalityEntity;

  @ManyToOne(type => LocationEntity, location => location.sections, {
    cascade: ['insert'],
  })
  location: LocationEntity;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(type => CustomerEntity, people => people.section)
  people: CustomerEntity[];

}
