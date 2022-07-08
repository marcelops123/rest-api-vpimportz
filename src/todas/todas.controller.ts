/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { TodasService } from './todas.service';

@Controller()
export class TodasController {
    constructor (private todasService: TodasService) {}

    @Get('todas')
  findAll() {
    return this.todasService.findAll();
  }
  
  @Get('todas/:id')
  findById(@Param('id', ParseIntPipe) id) {
    return this.todasService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
