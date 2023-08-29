// Factory function (Função fábrica)
/*  
A função Fabrica é usada para fabricar funcoes que fornecem aquelas funcoes que serão usadas por 
várias outras funções.

Funções construtoras são usadas em conjunto com create new geralmente. 

Getter permite que na hora de receber vc trate ele como  atributo (vc usa o getter pra fazer uma funcao parecer um atributo da classe)
*/


// Exemplo simples de função fábrica simples tb.
// function construtora(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// const instance = new construtora('John', 'Doe');
// console.log(instance);



function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter - // a palavra get é quem permite adiquirir o valor da funcao utilizando a notação de atributo
    get nomeCompleto() { 
      // por não estar utilizando os parâmetros(chaves) do objeto e por isso tem de usar o "this" pra elevar a notação de atributo
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter - Permite alterar todos os valores/ parametros da funcao Getter (acima).
    // Na funcao abaixo está adicionando espaço entre o nome e sobrenome
    set nomeCompleto(valor) { 
      valor = valor.split(' '); // vai formar um array chamado "valor" de nomes separados por espaco
      this.nome = valor.shift(); // remove e retorna o primeiro elemento do array. Usando this.nome pra pegar o atributo para o "nome" de criaPessoa
      this.sobrenome = valor.join(' ');
    },

    // Uma nova funcao que retorna um texto diferente
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

// console.log('############### P1 ###########', p1);
// console.log('############### P2 ###########', p2);
// console.log('############### P3 ###########', p3);
// console.log('############### FIM ###########');
// console.log(p3.fala('hablando qualquier cosa', 'ele não para de falar'));

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
console.log('####################');
console.log(p1.nome);
console.log(p2.sobrenome);
console.log('####################');
console.log(p1.fala());
console.log(p2.fala());
console.log(p3.fala());

