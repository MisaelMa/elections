import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {

  constructor(readonly configService: ConfigService) {

  }

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get('API_SECRET'),
      signOptions: { expiresIn: '7d' },
    };
  }
}
