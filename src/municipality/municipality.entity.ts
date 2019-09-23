import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { StateEntity } from '../state/state.entity';
import { LocationEntity } from 'src/location/location.entity';

@Entity('municipality')
export class MunicipalityEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @ManyToOne(type => StateEntity, state => state.municipalitys)
  id_state: StateEntity;

  @OneToMany(type => LocationEntity, location => location.id_muncipality)
  locations: Promise<LocationEntity[]>;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
