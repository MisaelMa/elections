import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { StateEntity } from '../state/state.entity';
@Entity('country')
export class CountryEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  abrev: string;

  @Column()
  name: string;

  @Column()
  cod_tel: string;

  @OneToMany(type => StateEntity, state => state.country)
  states: Promise<StateEntity[]>;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('date', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
