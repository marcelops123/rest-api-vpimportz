/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import path from "path";


@Injectable()
export class AppService {
  async findAll() {
    const fs = require('fs')

    try {
      const data = fs.readFileSync('./src/todas.json', 'utf8')
      const produtos = JSON.parse(data)
      return produtos;
    } catch (err) {
      console.error(err)
    }

  }


  async findById(id: number) {
    const fs = require('fs')
    const data = fs.readFileSync('./src/todas.json', 'utf8')
    const produtos = JSON.parse(data)
    const todas = produtos?.find((title) => title?.id === id);

    if (!todas) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }

    return todas;
  }


  
  findAllBasquete() {
    const fs = require('fs')

    try {
      const data = fs.readFileSync('./src/basquete.json', 'utf8')
      const basquete = JSON.parse(data)
      return basquete;
    } catch (err) {
      console.error(err)
    }

  }
  

  async findBasquetebyId(id: number) {
    const fs = require('fs')
    const data = fs.readFileSync('./src/basquete.json', 'utf8')
    const basquete = JSON.parse(data)
    const todas = basquete?.find((title) => title?.id === id);

    if (!todas) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }

    return todas;
  }

 
  findAlltopRated() {
    const fs = require('fs')

    try {
      const data = fs.readFileSync('./src/toprated.json', 'utf8')
      const produtos = JSON.parse(data)
      return produtos;
    } catch (err) {
      console.error(err)
    }
  }

  async findTopRatedById(id: number) {
   const fs = require('fs')
    const data = fs.readFileSync('./src/toprated.json', 'utf8')
    const basquete = JSON.parse(data)
    const todas = basquete?.find((title) => title?.id === id);

    if (!todas) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }

    return todas;
  }


  findAllTime() {
    const fs = require('fs')

    try {
      const data = fs.readFileSync('./src/times.json', 'utf8')
      const times = JSON.parse(data)
      return times;
    } catch (err) {
      console.error(err)
    }
  }

  async findTimebyId(id: number) {
    const fs = require('fs')
    const data = fs.readFileSync('./src/times.json', 'utf8')
    const times = JSON.parse(data)
    const todas = times?.find((title) => title?.id === id);

    if (!todas) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }

    return todas;
  }

}


