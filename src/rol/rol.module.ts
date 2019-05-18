import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { RolController } from './rol.controller';
import { RolEntity } from './rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  providers: [RolService, RolResolver],
  controllers: [RolController],
})
export class RolModule {}
