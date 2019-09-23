import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './odt/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async signIn(@Body() loginDTO: LoginDTO): Promise<any> {
    return await this.authService.signIn(loginDTO);
  }

}
