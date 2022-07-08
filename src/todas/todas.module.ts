import { TodasService } from './todas.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        TodasService,],
})
export class TodasModule { }
