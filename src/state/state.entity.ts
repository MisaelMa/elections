import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CountryEntity } from '../country/country.entity';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { LocationEntity } from '../location/location.entity';
import { SectionEntity } from '../section/section.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('state')
export class StateEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @Column()
  cod_tel: string;

  @ManyToOne(type => CountryEntity, country => country.states, {
    cascade: ['insert'],
  })
  country: CountryEntity;

  @OneToMany(type => MunicipalityEntity, municipality => municipality.state, {
    cascade: ['insert'],
  })
  municipalitys: MunicipalityEntity[];

  @OneToMany(type => LocationEntity, location => location.state, {
    cascade: ['insert'],
  })
  locations: LocationEntity[];

  @OneToMany(type => SectionEntity, section => section.state, {
    cascade: ['insert'],
  })
  sections: SectionEntity[];

  @OneToMany(type => CustomerEntity, section => section.state, {
    cascade: ['insert'],
  })
  people: CustomerEntity[];

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
