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
import DateTimeFormat = Intl.DateTimeFormat;

@Entity('serving')
export class ServingEntity {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 300,
    name: 'name',
  })
  name: string;

  @Column('decimal', {
    nullable: false,
    precision: 15,
    scale: 6,
    name: 'precio',
  })
  price: number;
  @Column('decimal', {
    nullable: false,
    precision: 15,
    scale: 6,
  })
  priceWithIVA: number;

  @Column('time', {
    nullable: false,
  })
  duration: any;

  @Column('int', {
    nullable: false,
  })
  sessions: number;

  @Column('tinyint', {
    nullable: false,
    width: 1,
    default: () => '\'1\'',
    name: 'isActive',
  })
  isActive: number;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'createdAt',
  })
  createdAt: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updatedAt',
  })
  updatedAt: Date;

}
