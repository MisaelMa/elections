import { Controller, Get, UseGuards } from '@nestjs/common';
import { CountryService } from './country.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from '../auth/guards/jwt.guard';
@UseGuards(JwtGuard)
@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Get()
  @UseGuards(AuthGuard())
  async findAll() {
    return await this.countryService.findAll();
  }
}
