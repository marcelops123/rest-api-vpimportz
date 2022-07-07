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
      return data;
    } catch (err) {
      console.error(err)
    }

  }


  // async findById(id: number) {
  //   const todas = this.todas.find((title) => title?.id === id);

  //   if (!todas) {
  //     throw Error(`Produto com o ID '${id}' não encontrado.`);
  //   }

  //   return todas;
  // }


  basquete: any = [
    {
      "id": 3,
      "title": "Regata Utah Jazz",
      "price": "200,00",
      "description": "Regata Utah Jazz Masculina  Roxa",
      "category": "Basquete",
      "image": "https://d2r9epyceweg5n.cloudfront.net/stores/002/157/953/products/regata-nba-utah-jazz-roxo-roxa-mitchell-45-21-22-11-e3d93b659c451cf8ff16491280367485-640-01-b42e9e2fcc299ec2c216523741746366-1024-1024.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 10,
      "title": "Regata Nike Giannis",
      "price": "200,00",
      "description": "Regata Nike Giannis Antetokounmpo Bucks Icon Edition 2020 Masculina",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/regata-nike-giannis-antetokounmpo-bucks-icon-edition-2020-masculina-CW3672-329-1.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    },
    {
      "id": 11,
      "title": "Regata Nike Kyrie Irving Nets",
      "price": "200,00",
      "description": "Regata Nike Kyrie Irving Nets Icon Edition 2020 Masculina.",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/regata-nike-kyrie-irving-nets-icon-edition-2020-masculina-CW3658-015-1-11626441888.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    },
    {
      "id": 12,
      "title": "Regata Nike Bulls Icon Edition",
      "price": "200,00",
      "description": "Regata Nike Bulls Icon Edition 2020 Masculina",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/regata-nike-bulls-icon-edition-2020-masculina-CW3660-660-1.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Regata Lakers Anthony Davis",
      "price": "200,00",
      "description": "Regata Lakers Anthony Davis Icon Edition 2020/21 Masculina.",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/camiseta-sem-manga-lal-m-nk-swgmn-jsy-ic-CW3669-728-1-11628868710.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 14,
      "title": "Regata Nike Los Angeles Lakers Swingman",
      "price": "200,00",
      "description": "Regata Nike Los Angeles Lakers Swingman 2021/22 Masculina.",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/regata-nike-los-angeles-lakers-swingman-202122-masculina-DB4032-505-1-11636470663.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 21,
      "title": "Los Angeles Lakers Jersey NBA crew neck Roxa",
      "price": "200,00",
      "description": "Los Angeles Lakers Jersey NBA crew neck Roxa Tamanhos: S M L XL XXL",
      "category": "Basquete",
      "image": "https://cf.shopee.com.br/file/ef0b6fa88551fac886e27326680222ec",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },

  ]
  findAllBasquete() {
    return this.basquete
  }

  async findBasquetebyId(id: number) {
    const basquete = this.basquete.find((title) => title?.id === id);

    if (!basquete) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }
    return basquete;
  }

  time: any = [
    {
      "id": 1,
      "title": "Camisa Brasil Branca Third 19-20 Masculina - Branca",
      "price": "125,00",
      "description": "Camisa Brasil 19-20",
      "category": "Futebol",
      "image": "https://d2r9epyceweg5n.cloudfront.net/stores/002/157/953/products/1dff0734-c6ca-41f6-87ca-9a2b9acfcb6a1-086f3849c11ff97db016528848156027-1024-1024.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Camisa Liverpool",
      "price": "125,00",
      "description": "Camisa Liverpool Edição Especial Preta 19/20 - Masculina",
      "category": "Futebol",
      "image": "https://d2r9epyceweg5n.cloudfront.net/stores/002/157/953/products/18a0577e0c9f5be3ce0fade01d45a2801-871084011fa4dd3d3f16530858469099-1024-1024.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 4,
      "title": "Camisa Nike Corinthians I",
      "price": "125,00",
      "description": "Camisa Nike Corinthians I 2022/2023 Jogador Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-corinthians-i-20222023-jogador-masculina-DJ7652-100-1-11652445272.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "Camisa Nike Corinthians II",
      "price": "125,00",
      "description": "Camisa Nike Corinthians II 2022/2023 Torcedor Pro Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-corinthians-ii-20222023-torcedor-pro-masculina-DM1836-060-1-11651846986.jpg",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Camisa Nike Liverpool",
      "price": "125,00",
      "description": "Camisa Nike Liverpool I 2022/23 Jogador Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-liverpool-i-202223-jogador-masculina-DJ7647-609-1-11653079907.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "Camisa Nike PSG IV 2021/22",
      "price": "125,00",
      "description": "Camisa Nike PSG IV 2021/22 Torcedor Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-psg-iv-202122-torcedor-masculina-DH7471-101-1-11644341792.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Camisa Nike Corinthians III",
      "price": "125,00",
      "description": "Camisa Nike Corinthians III Dri FIT Foundation Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-corinthians-iii-dri-fit-foundation-masculina-DB4727-594-1-11649184764.jpg",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    },
    {
      "id": 9,
      "title": "Camiseta Nike Corinthians",
      "price": "125,00",
      "description": "Camiseta Nike Corinthians Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camiseta-nike-corinthians-masculina-CQ5380-010-1-11649184689.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    },
    {
      "id": 15,
      "title": "Camiseta Nike PSG I 2021/22",
      "price": "125,00",
      "description": "Camiseta Nike PSG I 2021/22 Torcedor Masculina",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/860x860/produto/camiseta-nike-psg-i-202122-torcedor-masculina-CV7903-411-1.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Camisa Nike Liverpool I 2021/22",
      "price": "125,00",
      "description": "Camisa Nike Liverpool I 2021/22 Torcedor Pro Masculina",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/860x860/produto/camisa-nike-liverpool-i-202122-torcedor-pro-masculina-DB2560-688-1-11621433205.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 17,
      "title": "Camisa Nike PSG IV 2021/22",
      "price": "125,00",
      "description": "Camisa Nike PSG IV 2021/22 Jogador Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-psg-iv-202122-jogador-masculina-DH7467-101-1-11644341787.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    },
    {
      "id": 18,
      "title": "Camisa Flamengo Third 2021/22",
      "price": "125,00",
      "description": "Camisa Flamengo Third 2021/22 - Feminina.",
      "category": "Futebol Feminino",
      "image": "https://images.tcdn.com.br/img/img_prod/1052037/camisa_flamengo_third_2021_22_feminina_2075_1_8d7b3027aa2500a44fb834a496262e5a.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    },
    {
      "id": 19,
      "title": "Camiseta Nike Corinthians",
      "price": "125,00",
      "description": "Camiseta Nike Corinthians Masculina",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camiseta-nike-corinthians-masculina-CQ5380-010-1-11649184689.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    },
    {
      "id": 20,
      "title": "Camisa Flamengo Home 2022/23",
      "price": "125,00",
      "description": "Camisa Flamengo Home 2022/23 - Masculino.",
      "category": "Futebol",
      "image": "https://images.tcdn.com.br/img/img_prod/1052037/camisa_flamengo_home_2022_23_masculino_2533_1_f00d4c761e7f89d4e183d6c548550bb9.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    },
    {
      "id": 22,
      "title": "Alemanha Nacional time Copa Mundial 2014 Retro Soccer",
      "price": "125,00",
      "description": "Alemanha Nacional time Copa Mundial 2014 Retro Soccer Tamanhos: S M L XL 2XL",
      "category": "Futebol",
      "image": "https://static.netshoes.com.br/produtos/camisa-adidas-selecao-alemanha-home-2014-sn-torcedor/92/132-3766-792/132-3766-792_zoom1.jpg?ts=1639673234",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    },
    {
      "id": 23,
      "title": "Camisa Brasil Masculina CBF Basica Amarela",
      "price": "125,00",
      "description": "Camisa Brasil 19-20",
      "category": "Futebol",
      "image": "https://a-static.mlcdn.com.br/800x560/camisa-brasil-cbf-basic-amarela-gg/i9sportcenter/c01b5a1066ed11eba9294201ac1850d6/908ef983ffae1ed4ba69f37a8fbf90f6.jpeg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 24,
      "title": "Camisa Paris Saint-Germain Home 20/21",
      "price": "125,00",
      "description": "Camisa Paris Saint-Germain Home 20/21 s/n° Torcedor",
      "category": "Futebol",
      "image": "https://m.media-amazon.com/images/I/41rL0lODQyL._AC_SL1088_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }
  ]
  toprated: any = [

    {
      "id": 2,
      "title": "Camisa Liverpool",
      "price": "125,00",
      "description": "Camisa Liverpool Edição Especial Preta 19/20 - Masculina",
      "category": "Futebol",
      "image": "https://d2r9epyceweg5n.cloudfront.net/stores/002/157/953/products/18a0577e0c9f5be3ce0fade01d45a2801-871084011fa4dd3d3f16530858469099-1024-1024.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 6,
      "title": "Camisa Nike Liverpool",
      "price": "125,00",
      "description": "Camisa Nike Liverpool I 2022/23 Jogador Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-liverpool-i-202223-jogador-masculina-DJ7647-609-1-11653079907.jpg",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "Camisa Nike PSG IV 2021/22",
      "price": "125,00",
      "description": "Camisa Nike PSG IV 2021/22 Torcedor Masculina.",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/500x500/produto/camisa-nike-psg-iv-202122-torcedor-masculina-DH7471-101-1-11644341792.jpg",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 13,
      "title": "Regata Lakers Anthony Davis",
      "price": "200,00",
      "description": "Regata Lakers Anthony Davis Icon Edition 2020/21 Masculina.",
      "category": "Basquete",
      "image": "https://images.lojanike.com.br/860x860/produto/camiseta-sem-manga-lal-m-nk-swgmn-jsy-ic-CW3669-728-1-11628868710.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    },
    {
      "id": 15,
      "title": "Camiseta Nike PSG I 2021/22",
      "price": "125,00",
      "description": "Camiseta Nike PSG I 2021/22 Torcedor Masculina",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/860x860/produto/camiseta-nike-psg-i-202122-torcedor-masculina-CV7903-411-1.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    },
    {
      "id": 16,
      "title": "Camisa Nike Liverpool I 2021/22",
      "price": "125,00",
      "description": "Camisa Nike Liverpool I 2021/22 Torcedor Pro Masculina",
      "category": "Futebol",
      "image": "https://images.lojanike.com.br/860x860/produto/camisa-nike-liverpool-i-202122-torcedor-pro-masculina-DB2560-688-1-11621433205.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    },
    {
      "id": 24,
      "title": "Camisa Paris Saint-Germain Home 20/21",
      "price": "125,00",
      "description": "Camisa Paris Saint-Germain Home 20/21 s/n° Torcedor",
      "category": "Futebol",
      "image": "https://m.media-amazon.com/images/I/41rL0lODQyL._AC_SL1088_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },


  ]
  findAlltopRated() {
    return this.toprated
  }
  async findTopRatedById(id: number) {
    const toprated = this.toprated.find((title) => title?.id === id);

    if (!toprated) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }
    return toprated;
  }


  findAllTime() {
    return this.time
  }

  async findTimebyId(id: number) {
    const time = this.time.find((title) => title?.id === id);

    if (!time) {
      throw Error(`Produto com o ID '${id}' não encontrado.`);
    }
    return time;
  }

}

