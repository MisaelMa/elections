import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable, Tree, TreeChildren, TreeParent } from 'typeorm';
import { Permission } from '../../permissions/entities/permission.entity';
import { Action } from '../../actions/entities/action.entity';
import { RouteAction } from '../../route-action/entities/route-action.entity';

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

  @OneToMany(() => Permission, (permission) => permission.route)
  permissions: Permission[];

  @OneToMany(type => RouteAction, routeAction => routeAction.route)
  routeActions: RouteAction[];

}
