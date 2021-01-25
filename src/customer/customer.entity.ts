import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SectionEntity } from '../section/section.entity';
import { LocationEntity } from '../location/location.entity';
import { UserEntity } from '../user/user.entity';

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

  @ManyToOne(type => SectionEntity, state => state.people, {
    cascade: ['insert'],
  })
  section: SectionEntity;

  @ManyToOne(type => LocationEntity, state => state.people, {
    cascade: ['insert'],
  })
  zona: LocationEntity;

  @OneToOne(type => UserEntity, state => state.people, {
    cascade: ['insert'],
  })
  user: UserEntity;
}
