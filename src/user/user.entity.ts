import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
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
  @Column()
  password: string;

  // @Column({ nullable: true })
  // idRolId: number;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

}
