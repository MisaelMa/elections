import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Role } from './entities/role.entity';
import { RolesService } from './roles.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Crud({
    model: {
        type: Role,
    },
})
@Controller('system/roles')
export class RolesController implements CrudController<Role> {
    constructor(
        readonly service: RolesService,
    ) { }
    get base(): CrudController<Role> {
        return this;
    }
}
