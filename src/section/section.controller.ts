import { Controller } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionEntity } from './section.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: SectionEntity,
  },
})
@Controller('section')
export class SectionController implements CrudController<SectionEntity> {
  constructor(public service: SectionService) {
  }
}
