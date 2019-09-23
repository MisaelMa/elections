import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}
  @Get()
  async findAll() {
    return await this.locationService.findAll();
  }
}
