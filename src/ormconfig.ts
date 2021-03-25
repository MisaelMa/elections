import {ConnectionOptions} from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
import * as dotenv from 'dotenv';
import * as fs from 'fs';
const environment = process.env.NODE_ENV || 'development';
const processEnv: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...
// Check typeORM documentation for more information.
console.log(`Migración corriendo --> en entorno ${process.env.NODE_ENV }`);
console.log(`Migración corriendo --> en la base de datos ${processEnv.DB_DBNAME}`);

const config: ConnectionOptions = {
  type: 'mysql',
  name: 'ine',
  migrationsTableName: 'migrations_typeorm',
  host: processEnv.DB_HOST,
  port: processEnv.DB_PORT,
  username: processEnv.DB_USERNAME,
  password: processEnv.DB_PASSWORD,
  database: processEnv.DB_DBNAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // @ts-ignore
  seeds: [ __dirname + '/**/*.seed{.ts,.js}'],
  factories: [__dirname + '/**/*.factory{.ts,.js}'],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },

};

export = config;
