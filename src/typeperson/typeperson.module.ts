import { Module } from '@nestjs/common';
import { TypepersonService } from './typeperson.service';
import { TypepersonResolver } from './typeperson.resolver';
import { TypepersonController } from './typeperson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypepersonEntity } from './typeperson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypepersonEntity])],
  providers: [TypepersonService, TypepersonResolver],
  controllers: [TypepersonController],
})
export class TypepersonModule {}
