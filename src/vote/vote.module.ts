import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteResolver } from './vote.resolver';
import { VoteController } from './vote.controller';

@Module({
  providers: [VoteService, VoteResolver],
  controllers: [VoteController]
})
export class VoteModule {}
