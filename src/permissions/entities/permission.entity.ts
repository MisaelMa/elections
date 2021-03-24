import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Route } from '../../routes/entities/route.entity';
import { Action } from '../../actions/entities/action.entity';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

    @Column('int', { nullable: true })
    routeId: number;

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

    @ManyToOne(() => Role, (role) => role.permissions)
    role: Role;

    @ManyToOne(() => Route, (route) => route.permissions )
    route: Route;

    @ManyToMany(() => Action, (action) => action.permission, {
        cascade: ['insert', 'update', 'remove'],
    })
    @JoinTable()
    actions: Action[];

}
