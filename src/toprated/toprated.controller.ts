/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { TopratedService } from './toprated.service';

@Controller()
export class TopratedController {
    constructor (private topratedService: TopratedService) {}
   
   
    @Get('toprated')
  findAllTopRated() {
    return this.topratedService.findAlltopRated();
  }
  @Get('toprated/:id')
  findTopratedById(@Param('id', ParseIntPipe) id) {
    return this.topratedService.findTopRatedById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  
 }
