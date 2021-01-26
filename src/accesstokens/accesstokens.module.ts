import { Global, Module } from '@nestjs/common';
import { AccesstokensService } from './accesstokens.service';
import { AccesstokensController } from './accesstokens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokensEntity } from './accessTokens.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AccessTokensEntity], DBNameConnection)],
  providers: [AccesstokensService],
  controllers: [AccesstokensController],
  exports: [AccesstokensService],
})
export class AccesstokensModule {
}
