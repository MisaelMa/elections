import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { SectionEntity } from '../section/section.entity';
import { CustomerEntity } from '../customer/customer.entity';
import { StateEntity } from '../state/state.entity';

@Entity('location')
export class LocationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @ManyToOne(type => StateEntity, State => State.locations, {
    cascade: ['insert'],
  })
  state: StateEntity;

  @ManyToOne(type => MunicipalityEntity, municipality => municipality.locations, {
    cascade: ['insert'],
  })
  muncipality: MunicipalityEntity;

  @OneToMany(type => SectionEntity, section => section.location, {
    cascade: ['insert'],
  })
  sections: SectionEntity[];

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(type => CustomerEntity, people => people.zona, {
    cascade: ['insert'],
  })
  people: CustomerEntity[];
}
