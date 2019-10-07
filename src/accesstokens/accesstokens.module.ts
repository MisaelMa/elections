import { Global, Module } from '@nestjs/common';
import { AccesstokensService } from './accesstokens.service';
import { AccesstokensController } from './accesstokens.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokensEntity } from './accessTokens.entity';
@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AccessTokensEntity])],
  providers: [AccesstokensService],
  controllers: [AccesstokensController],
  exports:[AccesstokensService],
})
export class AccesstokensModule {}
