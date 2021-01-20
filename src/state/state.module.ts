import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';
import { StateController } from './state.controller';
import { StateEntity } from './state.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  providers: [StateService, StateResolver],
  controllers: [StateController],
  exports: [StateService],
})
export class StateModule {}
