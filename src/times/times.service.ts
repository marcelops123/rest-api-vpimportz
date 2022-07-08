/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TimesService { 
    findAllTime() {
        const fs = require('fs')
    
        try {
          const data = fs.readFileSync('./src/json/times.json', 'utf8')
          const times = JSON.parse(data)
          return times;
        } catch (err) {
          console.error(err)
        }
      }
    
      async findTimebyId(id: number) {
        const fs = require('fs')
        const data = fs.readFileSync('./src/json/times.json', 'utf8')
        const times = JSON.parse(data)
        const todas = times?.find((title) => title?.id === id);
    
        if (!todas) {
          throw Error(`Produto com o ID '${id}' não encontrado.`);
        }
    
        return todas;
      }
}
