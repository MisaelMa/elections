import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Route } from '../../routes/entities/route.entity';
import { RouteAction } from '../../route-action/entities/route-action.entity';
import { Permission } from '../../permissions/entities/permission.entity';

@Entity()
export class Action {
    @PrimaryGeneratedColumn({
        type: 'int',
    })
    id: number;

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

    @OneToMany(type => RouteAction, routeAction => routeAction.action)
    routeActions: RouteAction[];

    @ManyToMany(() => Permission, (permission) => permission.actions, {
        cascade: ['insert', 'update'],
    })
    permission: Permission[];
}
