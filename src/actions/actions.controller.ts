import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Action } from './entities/action.entity';
import { ActionsService } from './actions.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Crud({
    model: {
        type: Action,
    },
})
@Controller()
export class ActionsController implements CrudController<Action> {
    constructor( readonly service: ActionsService) { }
    get base(): CrudController<Action> {
        return this;
    }
}
