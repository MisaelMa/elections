import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '.././user/user.service';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './http.strategy';
import { AccesstokensService } from '../accesstokens/accesstokens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { AccessTokensEntity } from '../accesstokens/accessTokens.entity';
@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([AccessTokensEntity]),
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,
              UserService,
              AccesstokensService,
              JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
