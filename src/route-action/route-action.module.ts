import { Module } from '@nestjs/common';
import { RouteActionController } from './route-action.controller';
import { RouteActionService } from './route-action.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Route } from '../routes/entities/route.entity';
import { RouteAction } from './entities/route-action.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Module({
    imports: [TypeOrmModule.forFeature([RouteAction], DBNameConnection)],
    controllers: [RouteActionController],
    providers: [RouteActionService],
    exports: [RouteActionService],
})
export class RouteActionModule {
}
