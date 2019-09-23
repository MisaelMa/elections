import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SectionModule } from './section/section.module';
import { UserModule } from './user/user.module';
import { RolModule } from './rol/rol.module';
import { TypepersonModule } from './typeperson/typeperson.module';
import { ElectionModule } from './election/election.module';
import { VoteModule } from './vote/vote.module';
import { TypelectionModule } from './typelection/typelection.module';
import { LocationModule } from './location/location.module';
import { AuthModule } from './auth/auth.module';
import { AccesstokensModule } from './accesstokens/accesstokens.module';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { RoutesModule } from './routes/routes.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
// @ts-ignore left join only
// tslint:disable-next-line:only-arrow-functions
TypeOrmCrudService.prototype.getJoinType = function(s: string) {
  // tslint:disable-next-line:no-console
  return 'leftJoin';
};
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'marin',
    database: 'election',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
    CountryModule,
    StateModule,
    MunicipalityModule,
    SectionModule,
    UserModule,
    RolModule,
    TypepersonModule,
    ElectionModule,
    RoutesModule,
    PermissionsModule,
    RolesModule,
    VoteModule,
    TypelectionModule,
    LocationModule,
    AuthModule,
    AccesstokensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
