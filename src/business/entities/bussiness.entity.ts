import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('bussiness')
export class Bussiness {

  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 100,
  })
  name: string;

  @Column('varchar', {
    nullable: false,
    length: 20,
  })
  phone: string;

  @Column('text', {
    nullable: false,
  })
  address: string;

  @Column('varchar', {
    nullable: false,
    length: 10,
  })
  codigoPostal: string;

  @Column('varchar', {
    nullable: false,
  })
  countryid: number;

  @Column('int', {
    nullable: false,
  })
  cityid: number;

  @Column('varchar', {
    nullable: false,
    length: 1000,
  })
  logo: string;

  @Column('varchar', {
    nullable: false,
    length: 200,
    name: 'correo',
  })
  correo: string;

  @Column('date', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('date', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

}
