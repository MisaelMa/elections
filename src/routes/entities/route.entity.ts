import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable, Tree, TreeChildren, TreeParent } from 'typeorm';
import { Permission } from '../../permissions/entities/permission.entity';
import { Action } from '../../actions/entities/action.entity';

@Entity()
export class Route {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column('tinyint', {
        nullable: false,
    })
    isActive: number;

    @Column('varchar', {
        nullable: false,
        length: 60,
    })
    name: string;

    @Column('int', {
        nullable: true,
    })
    fatherID: number;

    @Column('int', {
        nullable: false,
    })
    level: number;

    @Column('varchar', {
        nullable: true,
    })
    url: string | null;

    @Column('varchar', {
        nullable: false,
        length: 50,
    })
    icon: string;
    @OneToMany(() => Permission, (permission) => permission.route)
    permissions: Permission[];

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

    @ManyToMany(() => Action, (action) => action.routes)
    @JoinTable()
    actions: Action[];
}
