import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { MunicipalityModule } from './municipality/municipality.module';
import { SectionModule } from './section/section.module';
import { UserModule } from './user/user.module';
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
import { BusinessModule } from './business/business.module';
import { FiscalInformationModule } from './fiscal-information/fiscal-information.module';
import { BranchOfficeModule } from './branch-office/branch-office.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from './config/config.module';
import { AgendadbService } from './database/agendadb.service';
import { ServingModule } from './serving/serving.module';
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
      // name: 'colegiodb',
      useClass: AgendadbService,
    }),
    CountryModule,
    StateModule,
    MunicipalityModule,
    SectionModule,
    UserModule,
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
    BusinessModule,
    FiscalInformationModule,
    BranchOfficeModule,
    CustomerModule,
    ConfigModule,
    ServingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
