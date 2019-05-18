import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, BeforeInsert } from 'typeorm';
import { RolEntity } from '../rol/rol.entity';
import * as crypto from 'crypto';
@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
  @Column()
  address: string;

  @Column()
  electorkey: string;

  @Column()
  telephone: string;

  @Column({
    unique: true,
  })
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  password: string;

  @ManyToOne(type => RolEntity, rol => rol.users)
  id_rol: RolEntity;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
