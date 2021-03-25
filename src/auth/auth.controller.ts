import { Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { RegisterGuard } from './guards/register.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/login.guard';
// import { AuthAccessTokensService } from '../auth-access-tokens/auth-access-tokens.service';
import * as moment from 'moment';
import { RefreshGuard } from './guards/refresh.guard';
import { RolesService } from '../roles/roles.service';
import routes from '../routes/seeds/route.catalogue';

@Controller('system/auth')
export class AuthController {
  constructor(readonly authService: AuthService,
              readonly roleService: RolesService,
              // readonly authAccessTokensService: AuthAccessTokensService
  ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res() res: Response) {
    const jwt = await this.authService.generateJWT(req.user);
    // tslint:disable-next-line:no-shadowed-variable
    const routes = await this.roleService.getPermissionRol(req.user.role.id);
    // await this.authAccessTokensService.saveToken({
    //   expiresAt: moment(jwt.decode.exp * 1000).toDate(),
    //   name: 'token',
    //   revoked: false,
    //   jwt: jwt.access_token,
    //   isActive: true,
    //   refresh: false,
    //   scopes: '[]',
    //   clientId: 1,
    //   userId: req.user.id,
    // });
    res.status(200);
    res.send({
      user: req.user,
      permission: routes.permissions,
      token: jwt.access_token,
    });
  }

  @UseGuards(RegisterGuard)
  @Post('register')
  async register(@Req() req, @Res() res: Response) {
    res.status(200);
    res.send(req.user);
  }

  // @UseGuards(RefreshGuard)
  // @Post('refresh-token')
  // async refresToken(@Req() req, @Res() res: Response) {
  //   const { token, sub, username } = req.user;
  //
  //   const lastToken = await this.authAccessTokensService.findToken(token);
  //   if (lastToken) {
  //
  //     const jwt = await this.authService.generateJWT({ id: sub, email: username });
  //     lastToken.jwt = jwt.access_token;
  //     lastToken.expiresAt = moment(jwt.decode.exp * 1000).toDate();
  //     lastToken.refresh = true;
  //     this.authAccessTokensService.repo.save(lastToken);
  //     res.status(200);
  //     res.send({
  //       refresh_token: jwt.access_token,
  //     });
  //   }
  //   throw new UnauthorizedException('Not Found Token');
  // }

  // @UseGuards(SessionGuard)
  @Get('logout')
  public logout(@Req() req, @Res() res) {
    res.send(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('jwt')
  public getJWT(@Req() req, @Res() res: Response) {
    res.status(201).json(req.user);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  public checkMySession(@Req() req, @Res() res: Response) {
    res.status(201).json(req.user);
  }
}
