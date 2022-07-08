/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class BasqueteService {
    findAllBasquete() {
        const fs = require('fs')
    
        try {
          const data = fs.readFileSync('./src/json/basquete.json', 'utf8')
          const basquete = JSON.parse(data)
          return basquete;
        } catch (err) {
          console.error(err)
        }
    
      }
      
    
      async findBasquetebyId(id: number) {
        const fs = require('fs')
        const data = fs.readFileSync('./src/json/basquete.json', 'utf8')
        const basquete = JSON.parse(data)
        const todas = basquete?.find((title) => title?.id === id);
    
        if (!todas) {
          throw Error(`Produto com o ID '${id}' não encontrado.`);
        }
    
        return todas;
      }
 }
