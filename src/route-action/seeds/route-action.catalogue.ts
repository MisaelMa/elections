import { RouteAction } from '../entities/route-action.entity';
import { ActionsEnum } from '../../actions/seeds/actions.catalogue';
import { Route } from '../../routes/entities/route.entity';
import { Action } from '../../actions/entities/action.entity';

const routesActions: RouteAction[] = [
  { id: 1, route: { id: 12 }, action: { id: ActionsEnum.DELETE } },
] as unknown as RouteAction[];
export default routesActions;
