import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Teacher } from '../../school-colegio-ingles/teachers/entities/teacher.entity';
import { ColegioDBNameConnection } from '../../databases/colegiodb.service';

@Module({
  imports: [ TypeOrmModule.forFeature([User, Teacher], ColegioDBNameConnection) ],
  exports: [ UserService ],
  controllers: [ UserController ],
  providers: [ UserService ],
})
export class UsersModule {}
