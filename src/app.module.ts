import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SectionModule } from './section/section.module';
import { UserModule } from './user/user.module';
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
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from './config/config.module';
import { AgendadbService, DBNameConnection } from './database/agendadb.service';
import { RouteActionModule } from './route-action/route-action.module';
import { ActionsModule } from './actions/actions.module';
// @ts-ignore left join only
// tslint:disable-next-line:only-arrow-functions
TypeOrmCrudService.prototype.getJoinType = function(s: string) {
  // tslint:disable-next-line:no-console
  return 'leftJoin';
};
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      name: DBNameConnection,
      useClass: AgendadbService,
    }),
    CountryModule,
    StateModule,
    MunicipalityModule,
    SectionModule,
    UserModule,
    ElectionModule,
    RoutesModule,
    PermissionsModule,
    RolesModule,
    RouteActionModule,
    ActionsModule,
    VoteModule,
    TypelectionModule,
    LocationModule,
    AuthModule,
    AccesstokensModule,
    CustomerModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
