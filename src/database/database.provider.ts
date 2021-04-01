// Modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConnectionOptions } from 'typeorm';
// Services
import { ConfigService } from '../config/config.service';
// Enum
import { DBNameConnection } from './agendadb.service';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    name: DBNameConnection,
    inject: [ConfigService],
    async useFactory(configService: ConfigService) {
      return {
        // type: 'sqlite',
        // // name: ColegioDBNameConnection,
        // database: 'db.db',
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // synchronize: true,
        type: 'mysql',
        name: DBNameConnection,
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DBNAME'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: configService.isSynchronizeDBEnabled,
        migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
        cli: {
          migrationsDir: 'src/migrations',
        },
      } as ConnectionOptions;
    },
  }),
];
