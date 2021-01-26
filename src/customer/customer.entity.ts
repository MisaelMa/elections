import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SectionEntity } from '../section/section.entity';
import { LocationEntity } from '../location/location.entity';
import { UserEntity } from '../user/user.entity';
import { MunicipalityEntity } from '../municipality/municipality.entity';
import { StateEntity } from '../state/state.entity';

export enum TypeOfPeople {
  Lider = 1,
  Promovido = 2,
  Activista = 3,
}

@Entity('customer')
export class CustomerEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column('varchar', {
    nullable: true,
  })
  name: string;

  @Column('varchar', {
    nullable: true,
    length: 60,
  })
  lastNameFather: string | null;

  @Column('varchar', {
    nullable: true,
    length: 60,
  })
  lastNameMother: string | null;

  @Column('varchar', {
    nullable: true,
  })
  clave: string | null;

  @Column('varchar', {
    nullable: true,
  })
  phone: string | null;

  @Column('varchar', {
    nullable: true,
  })
  direccion: string | null;

  @Column('int', {
    nullable: true,
  })
  peopleId: number | null;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({
    type: 'simple-enum',
    nullable: true,
    enum: TypeOfPeople,
  })
  typeOfPeople: TypeOfPeople;

  @ManyToOne(type => StateEntity, state => state.people, {
    cascade: ['insert'],
  })
  state: StateEntity;

  @ManyToOne(type => MunicipalityEntity, mun => mun.people, {
    cascade: ['insert'],
  })
  municipality: MunicipalityEntity;

  @ManyToOne(type => LocationEntity, location => location.people, {
    cascade: ['insert'],
  })
  zona: LocationEntity;

  @ManyToOne(type => SectionEntity, sec => sec.people, {
    cascade: ['insert'],
  })
  section: SectionEntity;

  @OneToOne(type => UserEntity, user => user.people, {
    cascade: ['insert'],
  })
  user: UserEntity;
}
