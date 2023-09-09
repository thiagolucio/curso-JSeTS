// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this.velocidade = 0;
//   }

//   acelerar() {
//     if(this.velocidade >= 100) return;
//     this.velocidade++;
//   }
//   freiar() {
//     if(this.velocidade <= 0) return;
//     this.velocidade--;
//   }
// }

// const carro = new Carro('Fusca');
// for (let i = 0; i <= 110; i++) {
//   carro.acelerar();
// }

// carro.velocidade = 1500; // o ideal é que niguém consiga trabalhar com a prop velocidade pois como pode ser visto ela poderá burlar as regras. Isso é falha de segurança inclusive na programação
// console.log(carro);


// para resolver esse problema de não permitir que uma propriedade seja editada/ alterada pelo usuário eu devo trabalhar com o symbol()
// const _velocidade = Symbol('velocidade');

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0; // vc substitui em todos os lugares onde antes foi declarado o "this.velocidade"
//   }

//   // criar uma funcao setter pra poder setar a velocidade
//   set velocidade(valor) {
//     console.log('SETTER');
//     if(typeof valor !== 'number') return;
//     if(valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   // cria esse getter para poder acessar a velocidade setada no construtor
//   get velocidade() {
//     console.log('GETTER');
//     return this[_velocidade];
//   }
  
//   acelerar() {
//     if(this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }
//   freiar() {
//     if(this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const carro = new Carro('Fusca');
// for (let i = 0; i <= 110; i++) {
//   carro.acelerar();
// }

// const carro = new Carro('Fusca');

// carro.velocidade = 99;
// console.log(carro); // retorna Carro { nome: 'Fusca', velocidade: 1500, [Symbol(velocidade)]: 100 }
// console.log(carro.velocidade);

