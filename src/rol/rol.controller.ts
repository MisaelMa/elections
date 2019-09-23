import { Controller, Get } from '@nestjs/common';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}
  @Get()
  async findAll() {
    return await this.rolService.findAll();
  }
}
