import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { LocationEntity } from '../location/location.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  // @Column({ nullable: true })
  // idRolId: number;

  @ManyToOne(() => Role, (role) => role.users, {
    cascade: ['insert'],
  })
  role: Role;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToOne(type => CustomerEntity, state => state.user, {
    cascade: ['insert'],
  })
  @JoinColumn()
  people: LocationEntity;
}
