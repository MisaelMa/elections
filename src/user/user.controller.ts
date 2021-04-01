import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { Response } from 'express';
import { UpdatePasswordDto } from './dto/UpdatePassword.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { EntityMetadata } from 'typeorm';
import * as bcrypt from 'bcrypt';

interface DataBase {
  name: string;
  tableName: string;
}

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    exclude: ['password', 'rememberToken'],
    join: {
      role: {},
      people: {},
    },
  },
})
@Controller('system/users')
export class UserController implements CrudController<UserEntity> {
  constructor(
    readonly service: UserService,
  ) {
  }

  get base(): CrudController<UserEntity> {
    return this;
  }

  @Get('tables')
  async getTables() {
    const entities: DataBase[] = [];
    (await (await this.service.repo.createQueryBuilder().connection).entityMetadatas).forEach(
      async (x: EntityMetadata, i) => {

        entities.push({
          name: x.name,
          tableName: x.tableName,
        });
      },
    );
    return entities;
  }

  @Post('drop-data-base')
  async cleanAll(@Body() userBody: { email: string, password: string }, @Req() req, @Res() res: Response) {
    try {
      const user: UserEntity | undefined = await this.service.repo.createQueryBuilder('users')
        .leftJoinAndSelect('users.role', 'role')
        .where('users.email = :email', { email: userBody.email })
        .getOne();
      if (user && bcrypt.compareSync(userBody.password, user.password.replace('$2y$', '$2a$'))) {
        const repository = await this.service.repo.createQueryBuilder().connection;
        await repository.dropDatabase();
        if (repository.isConnected) {
           await repository.close();
        }
        res.status(200);
        res.send({
          status: 200,
          msg: 'Base de datos eliminada',
        });
      } else {
        res.status(400);
        res.send({
          status: 400,
          msg: 'Datos incorrectos',
        });
      }
    } catch (error) {
      res.status(400);
      res.send({
        status: 400,
        msg: 'Datos incorrectos',
      });
    }
  }

  @Post('store')
  async createNewUser(@Body() userBody: Partial<UserEntity>, @Req() req, @Res() res: Response) {
    try {
      const { email } = userBody;
      const user: UserEntity | undefined = await this.service.findOne({ email });
      if (user) {
        res.status(401);
        res.send({ msg: 'user exist' });
      } else {
        const result = await this.service.save(await this.service.create(userBody));
        res.send(result);
      }
    } catch (e) {
      res.status(401);
      res.send(e);
    }
  }

  @Post('update-password')
  async updatePassword(@Body() userBody: UpdatePasswordDto, @Req() req, @Res() res: Response) {
    try {
      const { id } = userBody;
      const user: UserEntity | undefined = await this.service.findOne({ id });
      if (user) {
        const result = await this.service.save(await this.service.changePassword(userBody));
        res.send({ msg: 'password change' });
      } else {
        res.status(401);
        res.send({ msg: 'user no exist' });
      }
    } catch (e) {
      res.status(401);
      res.send(e);
    }
  }
}
