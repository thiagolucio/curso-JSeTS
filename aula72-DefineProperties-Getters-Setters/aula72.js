// defineProperty -> Getter e Setters
// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   let estoquePrivado = estoque;
//   Object.defineProperty(this, 'estoque', {
//     enumerable: true, // mostra a chave
//     configurable: true, // configurável
//     get: function() { // pegando o valor como método
//       return estoquePrivado;
//     },
//     set: function(valor) {
//       if (typeof valor !== 'number') {
//         throw new TypeError('Mensagem que tem de ser números!!');
//       }

//       estoquePrivado = valor;
//     }
//   });
// }


// const p1 = new Produto('Camiseta', 20, 33);
// p1.estoque = 'thiago';
// console.log(p1.estoque);




function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', ''); // ele retira o coisa trocando por um espaço vazio
      nome = valor;
    }
  };
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 'asdasd';
// console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'; // Retorna "Qualquer" como explicado na linha 37
console.log(p2.nome);
