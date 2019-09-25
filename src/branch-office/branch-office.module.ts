import { Module } from '@nestjs/common';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeController } from './branch-office.controller';

@Module({
  providers: [BranchOfficeService],
  controllers: [BranchOfficeController]
})
export class BranchOfficeModule {}
