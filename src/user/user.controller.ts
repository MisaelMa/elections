import { Controller, HttpStatus, Post, Res, Body, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  @Get()
  @UseGuards(AuthGuard())
  async findAll() {
    return await this.userService.findAll();
  }
  @Post()
  async createProduct(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO)
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      user,
    });
  }
}
