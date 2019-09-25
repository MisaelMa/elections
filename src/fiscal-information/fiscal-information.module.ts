import { Module } from '@nestjs/common';
import { FiscalInformationService } from './fiscal-information.service';
import { FiscalInformationController } from './fiscal-information.controller';

@Module({
  providers: [FiscalInformationService],
  controllers: [FiscalInformationController]
})
export class FiscalInformationModule {}
