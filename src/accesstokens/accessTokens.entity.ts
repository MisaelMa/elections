import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity('access_tokens')
export class AccessTokensEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  name: string;

  @Column('text')
  token: string;

  @Column()
  revoked: boolean;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column()
  expiresAt: string;
}
