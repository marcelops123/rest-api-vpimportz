/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TopratedService {
    findAlltopRated() {
        const fs = require('fs')
    
        try {
          const data = fs.readFileSync('./src/json/toprated.json', 'utf8')
          const produtos = JSON.parse(data)
          return produtos;
        } catch (err) {
          console.error(err)
        }
      }
    
      async findTopRatedById(id: number) {
       const fs = require('fs')
        const data = fs.readFileSync('./src/json/toprated.json', 'utf8')
        const basquete = JSON.parse(data)
        const todas = basquete?.find((title) => title?.id === id);
    
        if (!todas) {
          throw Error(`Produto com o ID '${id}' não encontrado.`);
        }
    
        return todas;
      }
 }
