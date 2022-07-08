/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { BasqueteService } from './basquete.service';

@Controller()
export class BasqueteController {
    constructor (private BasqueteService: BasqueteService) {}
    @Get('basquete')
  findAllBasquete() {
    return this.BasqueteService.findAllBasquete();
  }

  @Get('basquete/:id')
  findBasquetebyId(@Param('id', ParseIntPipe) id) {
    return this.BasqueteService.findBasquetebyId(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}



