import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

export const ColegioDBNameConnection = 'elecciones';

@Injectable()
export class AgendadbService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      // type: 'sqlite',
      // // name: ColegioDBNameConnection,
      // database: 'db.db',
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // synchronize: true,
      type: 'mysql',
      // name: ColegioDBNameConnection,
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DBNAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: this.configService.isSynchronizeDBEnabled,
      migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    };
  }
}
