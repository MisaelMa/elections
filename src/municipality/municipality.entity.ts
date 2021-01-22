import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StateEntity } from '../state/state.entity';
import { LocationEntity } from '../location/location.entity';

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

  @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
