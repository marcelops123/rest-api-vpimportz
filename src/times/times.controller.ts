/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { TimesService } from './times.service';

@Controller()
export class TimesController {
    constructor (private TimesService: TimesService) {}

    @Get('time')
  findAllTime() {
    return this.TimesService.findAllTime();
  }

  @Get('time/:id')
  findTimeById(@Param('id', ParseIntPipe) id) {
    return this.TimesService.findTimebyId(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

}


