import { Module } from '@nestjs/common';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
  imports: [TypeOrmModule.forFeature([Permission], DBNameConnection)],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
