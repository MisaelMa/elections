import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';
import { SectionController } from './section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionEntity } from './section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity])],
  providers: [SectionService, SectionResolver],
  controllers: [SectionController],
})
export class SectionModule {}
