/* eslint-disable prettier/prettier */
import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todas')
  findAll() {
    return this.appService.findAll();
  }
  
  // @Get('todas/:id')
  // findById(@Param('id', ParseIntPipe) id) {
  //   return this.appService.findById(id).catch((e) => {
  //     throw new NotFoundException(e.message);
  //   });
  // }
  
  @Get('basquete')
  findAllBasquete() {
    return this.appService.findAllBasquete();
  }

  @Get('basquete/:id')
  findBasquetebyId(@Param('id', ParseIntPipe) id) {
    return this.appService.findBasquetebyId(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Get('time')
  findAllTime() {
    return this.appService.findAllTime();
  }

  @Get('time/:id')
  findTimeById(@Param('id', ParseIntPipe) id) {
    return this.appService.findTimebyId(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
  @Get('toprated')
  findAllTopRated() {
    return this.appService.findAlltopRated();
  }
  @Get('toprated/:id')
  findTopratedById(@Param('id', ParseIntPipe) id) {
    return this.appService.findTopRatedById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
