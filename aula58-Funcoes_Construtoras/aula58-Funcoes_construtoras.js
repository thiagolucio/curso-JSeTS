// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new) - usa o new ... 
/* 
A palavra new cria um objeto molde vazio e faz o this apontar para esse objeto de forma a receeber e
 lidar com as props da funcao construtora retornando implicitamente o objeto para a variável. Ela também
 já immplementa o return automaticamente
 */
// Construtoras possuem nomes que começam com letra maiusculas
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  // const ID = 123456;
  // const metodoInterno = function() {};
  
  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  // método é uma função dentro do objeto
  this.metodo = function() {
    console.log(this.nome + ': sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
p2.metodo();

