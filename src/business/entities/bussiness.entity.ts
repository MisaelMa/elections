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
    name: 'id',
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
  country: number;

  @Column('varchar', {
    nullable: false,
    length: 200,
    name: 'correo',
  })
  correo: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

}
