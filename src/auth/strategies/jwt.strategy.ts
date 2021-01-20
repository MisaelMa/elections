import { AuthService } from '../auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: 'misecreto',
        });
    }

    async validate(payload: any) {
        /*if (Date.now() >= payload.exp * 1000) {
             throw  new UnauthorizedException('Expired token');
         }*/
        return payload;
    }
}
