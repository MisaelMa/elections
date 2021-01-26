import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { DBNameConnection } from '../database/agendadb.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity], DBNameConnection)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
}
