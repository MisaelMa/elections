import { INestApplication, Module } from '@nestjs/common';
import * as session from 'express-session';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy, LocalStrategy } from './strategies';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './jwt-config.service';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    UserModule,
    ConfigModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
      imports: [ConfigModule],
    }),
    RolesModule,
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
  constructor(readonly configService: ConfigService) {

  }

  public initialize(app: INestApplication) {
    app.use(session({
      secret: this.configService.get('API_SECRET'),
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
