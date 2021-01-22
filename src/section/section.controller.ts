import { Controller, UseGuards } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionEntity } from './section.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtGuard } from '../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: SectionEntity,
  },
  query: {
    join: {
      location: {},
      people: {},
    },
  },
})
@Controller('section')
export class SectionController implements CrudController<SectionEntity> {
  constructor(public service: SectionService) {
  }
}
