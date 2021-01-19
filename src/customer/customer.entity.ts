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

  @Column('tinyint', {
    nullable: false,
  })
  isActive: number;

  @Column('varchar', {
    nullable: false,
    length: 150,
  })
  email: string;

  @Column('varchar', {
    nullable: false,
    length: 50,
  })
  phone: string;

  @Column('int', {
    nullable: true,
  })
  age: number | null;

  @Column('varchar', {
    nullable: true,
    length: 10,
  })
  gender: string | null;

  @Column('varchar', {
    nullable: true,
    length: 200,
  })
  address: string | null;

  @Column('varchar', {
    nullable: true,
    length: 10,
  })
  bloodType: string | null;

  @Column('date', {
    nullable: true,
  })
  birthdate: Date | null;

  @Column('varchar', {
    nullable: false,
    length: 250,
  })
  searchName: string;

  @Column('text', {
    nullable: true,
  })
  profilePicture: string | null;

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
}
