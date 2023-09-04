// defineProperty -> Getter e Setters
// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, 'estoque', { // Adiciona propriedades ao objeto, ou modifica atributos de propriedades existentes
//     // Necessário adicionar propriedades descritivas
//     enumerable: true, // Mostra a chave - indica que vc quer mostrar a propriedade. No caso estoque. No entanto sem valor ele fica  "undefined"
//     value: estoque, // Mostra o valor da chave - indica quem vc quer mostrar/ alterar. Neste caso estoque
//     // value: function() { // vai retornar o estoque
//     //   return estoque; 
//     // }
//     writable: true, // indica que o valor poderá ser alterado ou não
//     configurable: false // Indica se a chave é configurável ou não. Indicando aqui false vc não consegue reconfigurar a chave.
//   });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 5000; // vai alterar o valor de estoque porque o writable é true
// delete p1.estoque; // não vai deletar porque o configurable está false.  
// console.log(p1);
// console.log(p1.estoque()); // se value for uma funcao (linha 10 a 12)
// console.log(Object.keys(p1)); // não consegue mais ver as chaves com "enumerable: false" (linha 8)


// varre o objeto e mostra as chaves que ele tem
// for(let chave in p1) {
//   console.log(chave);
// }


// DEFINE PROPERTIES
// defineProperties -> Getter e Setters

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
      enumerable: true,
      value: estoque,
      writable: true,
      configurable: true
    });
    Object.defineProperties(this, {      
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true
    },
    })
  };

  const p1 = new Produto('Camiseta', 20, 3);
  console.log(p1);
for(let chave in p1) {
  console.log(chave);
}