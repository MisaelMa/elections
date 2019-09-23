import { Module } from '@nestjs/common';
import { TypelectionService } from './typelection.service';
import { TypelectionResolver } from './typelection.resolver';
import { TypelectionController } from './typelection.controller';

@Module({
  providers: [TypelectionService, TypelectionResolver],
  controllers: [TypelectionController]
})
export class TypelectionModule {}
