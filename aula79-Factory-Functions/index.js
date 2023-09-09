// Factory Functions 
// Neste exemplo também está declarado como funciona a questão de descentralizar o código e criar métodos para realizar
// cada uma um pedacinho das tarefas que devem ser feitas

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber); // criando um objeto vazio com as propriedades falar, comer e beber

// Factory Function
function criaPessoa(nome, sobrenome) {  
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);


/* No caso Factory Function são um tipo de padrão de projeto. Existem as factory functions, constructor funtcions, class functions. Vc deve 
procurar entender todos os tipos para poder se adaptar em qualquer projeto e poder produzir. 
Não perca o seu tempo debatendo qual a melhor só aprenda todas */