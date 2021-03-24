import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Tree } from 'typeorm';
import { Permission } from '../../permissions/entities/permission.entity';
import { UserEntity } from '../../user/user.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column('boolean', {
        nullable: false,
    })
    isActive: boolean;

    @Column('varchar', {
        nullable: false,
        length: 60,
    })
    name: string;

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

    @OneToMany(() => Permission, (permission) => permission.role)
    permissions: Permission[];

    @OneToMany(() => UserEntity, (user) => user.role )
    users: UserEntity[];
}
