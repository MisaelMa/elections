import { AuthService } from '../auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(readonly authService: AuthService, readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            // @ts-ignore
            secretOrKey: configService.get('API_SECRET'),
        });
    }

    async validate(payload: any) {
        /*if (Date.now() >= payload.exp * 1000) {
             throw  new UnauthorizedException('Expired token');
         }*/
        return payload;
    }
}
