import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(type => CountryEntity, country => country.states, {
    cascade: ['insert'],
  })
  country: CountryEntity;

  @OneToMany(type => MunicipalityEntity, municipality => municipality.state, {
    cascade: ['insert'],
  })
  municipalitys: MunicipalityEntity[];

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
