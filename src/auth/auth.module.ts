import { INestApplication, Module } from '@nestjs/common';
import * as session from 'express-session';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy, LocalStrategy } from './strategies';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './jwt-config.service';

@Module({
  imports: [
    UserModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [
    PassportModule,
    LocalStrategy,
    JwtStrategy,
    AuthService,
  ],
  controllers: [AuthController],
})
export class AuthModule {

  public initialize(app: INestApplication) {
    app.use(session({
      secret: 'misecreto',
      resave: false,
      cookie: {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      saveUninitialized: false,
    }));

  }
}
