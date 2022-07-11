/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TodasService {

    async findAll() {
        const fs = require('fs')
    
        try {
          const data = fs.readFileSync('./src/json/todas.json', 'utf8')
          const produtos = JSON.parse(data)
          return produtos;
        } catch (err) {
          console.error(err)
        }
    
      }
    
    
      async findById(id: number) {
        const fs = require('fs')
        const data = fs.readFileSync('./src/json/todas.json', 'utf8')
        const produtos = JSON.parse(data)
        const todas = produtos?.find((title) => title?.id === id);
    
        if (!todas) {
          throw Error(`Produto com o ID '${id}' não encontrado.`);
        }
    
        return todas;
      }
    
     

}
