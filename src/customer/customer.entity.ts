import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SectionEntity } from '../section/section.entity';
import { LocationEntity } from '../location/location.entity';

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

  @Column('date', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('date', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(type => SectionEntity, state => state.people, {
    cascade: ['insert'],
  })
  section: SectionEntity;

  @ManyToOne(type => LocationEntity, state => state.people, {
    cascade: ['insert'],
  })
  zona: LocationEntity;
}
