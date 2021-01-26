import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StateEntity } from '../state/state.entity';
import { LocationEntity } from '../location/location.entity';
import { SectionEntity } from '../section/section.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('municipality')
export class MunicipalityEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @ManyToOne(type => StateEntity, state => state.municipalitys, {
    cascade: ['insert'],
  })
  state: StateEntity;

  @OneToMany(type => LocationEntity, location => location.muncipality, {
    cascade: ['insert'],
  })
  locations: LocationEntity[];

  @OneToMany(type => SectionEntity, location => location.municipality, {
    cascade: ['insert'],
  })
  sections: SectionEntity[];

  @OneToMany(type => CustomerEntity, people => people.municipality, {
    cascade: ['insert'],
  })
  people: CustomerEntity[];

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
