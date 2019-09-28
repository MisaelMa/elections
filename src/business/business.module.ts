import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bussiness } from './entities/bussiness.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Bussiness ]) ],
  exports: [BusinessService],
  providers: [BusinessService],
  controllers: [BusinessController],
})
export class BusinessModule {}
