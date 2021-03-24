import { RouteAction } from '../entities/route-action.entity';
import { ActionsEnum } from '../../actions/seeds/actions.catalogue';

// @ts-ignore
const routesActions: Array<Partial<RouteAction>> = [
    { id: 1, route: { id: 21 }, action: { id: ActionsEnum.CREATE } },
    { id: 2, route: { id: 21 }, action: { id: ActionsEnum.READ } },
    { id: 3, route: { id: 21 }, action: { id: ActionsEnum.UPDATE } },
    { id: 4, route: { id: 21 }, action: { id: ActionsEnum.DELETE } },
] as RouteAction;
export default routesActions;
