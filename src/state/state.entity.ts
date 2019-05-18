import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { CountryEntity } from '../country/country.entity';
import { MunicipalityEntity } from '../municipality/municipality.entity';

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

  @ManyToOne(type => CountryEntity, country => country.states)
  id_country: CountryEntity;

  @OneToMany(type => MunicipalityEntity, municipality => municipality.id_state)
  municipalitys: Promise<MunicipalityEntity[]>;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
