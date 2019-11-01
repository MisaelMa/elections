import { Module } from '@nestjs/common';
import { ServingService } from './serving.service';
import { ServingController } from './serving.controller';

@Module({
  providers: [ServingService],
  controllers: [ServingController]
})
export class ServingModule {}
