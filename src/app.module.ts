import { TopratedModule } from './toprated/toprated.module';
import { TopratedService } from './toprated/toprated.service';
import { TopratedController } from './toprated/toprated.controller';
import { BasqueteModule } from './basquete/basquete.module';
import { BasqueteService } from './basquete/basquete.service';
import { BasqueteController } from './basquete/basquete.controller';
import { TimesModule } from './times/times.module';
import { TimesService } from './times/times.service';
import { TimesController } from './times/times.controller';
import { TodasModule } from './todas/todas.module';
import { TodasController } from './todas/todas.controller';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { TodasService } from './todas/todas.service';

@Module({
  imports: [
    TopratedModule,
    BasqueteModule,
    TimesModule,
    TodasModule,],
  controllers: [
    TopratedController,
    BasqueteController,
    TimesController,
    TodasController, ],
  providers: [
    TopratedService,
    BasqueteService,
    TimesService,  TodasService],
})
export class AppModule { }
