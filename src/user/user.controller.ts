import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { Response } from 'express';
import { UpdatePasswordDto } from './dto/UpdatePassword.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';

// @UseGuards(JwtGuard)
@Crud({
  model: {
    type: UserEntity,
  },
  query: {
    exclude: ['password', 'rememberToken'],
    join: {},
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
