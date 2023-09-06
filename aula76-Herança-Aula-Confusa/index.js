// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
// Boa fonte de informacoes sobre - https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) { // cada função construtora tem as suas proprias propriedades prototype
  Produto.call(this, nome, preco); // substitui os atributos de Camiseta pelas mesmas de Produto
  this.cor = cor; // cria mais atributo chamado cor em Camiseta
}
Camiseta.prototype = Object.create(Produto.prototype); // criou um novo produto baseado em Produto mas com novo prototype
Camiseta.prototype.constructor = Camiseta; // camiseta herda tudo que tem em produto mas ele pode adicionar suas proprias propriedades
Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};


// OUTRO EXEMPLO COM UM NOVO CONSTRUTOR
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype); // pega o Produto vazio sem anda nele
Caneca.prototype.constructor = Caneca; // cria um prototype construtor para o Caneca de Caneca. Só dele.


const caneca = new Caneca('Caneca', 13, 'Plástico', 5); //  Ele vai ignorar o último valor de estoque(5) e vai usar o valor retornado do getter e setter das propriedades de Caneca
caneca.estoque = 100;
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const produto = new Produto('Gen', 111);

console.log(caneca);
console.log('Qtd Estoque Caneca: ', caneca.estoque);
console.log(camiseta);
console.log(produto);
