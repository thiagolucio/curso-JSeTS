/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Nome do produto', preco: 1.8, material: 'porcelana' };
// const outroProduto = produto; // cria uma representação do objeto "produto" em "outroProduto". Compartilham os mesmos valores
const outroProduto = {...produto}; // Este é o melhor método - Cria um novo objeto a partir do objeto "produto". Isso cria um novo objeto com os mesmos valores sem compartilhar os mesmos valores
// const outroProduto = {
//     ...produto,
//     material: 'acrilico',
//     vendido: false
// };
// const outroProduto = {nome: produto.nome, preco: produto.preco}; // Esta é a pior forma possível mas funciona e é a mais clara do que está sendo feito
// const outroProduto = Object.assign({}, produto); // copiando tudo que tá dentro de produto pra dentro desse objeto
// const outroProduto = Object.assign({}, produto, {material: 'cobre'}); // copiando tudo que tá dentro de produto pra dentro desse objeto

// produto.nome = 'Thiago Lúcio Bittencourt'; // muda o valor em ambos os objetos, tanto em "produtos" quanto em "outroProduto". Isso acontece porque ele muda o valor na posição de memória dele.
// outroProduto.nome = 'Nome de outracoisa';

// console.log('outro Produto: ', outroProduto);
// console.log('Produto: ', produto);

// console.log(Object.keys(produto)); // mostra as chaves do objeto.
// console.log(Object.values(produto)); // mostra os valores do objeto
// console.log(Object.entries(produto)); // mostra as chaves e valores do objeto
// console.log(Object.assign(produto)); //  concatena os valores dos dois objetos em um novo objeto
// Object.freeze(produto);  // Vc congela o Objeto e não consegue alterar mais nada. Ele não pode ser modificado.


// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'), '_____'); // Mostra as propriedades da prop nome do objeto produto (mostra se é writable, enumerable e configurable)
// Alterando as propriedades da prop "nome" no objeto "produto"
// Object.defineProperty(produto, 'nome', { // definePoperty é usado par alterar as propriedades de um objeto
//   writable: false,
//   configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// delete produto.preco; // vai deletar o item preço do produto porque foi permitido


// exemplo com Object.entries num for
// for(let entry of Object.entries(produto)) {
//   console.log(entry);
// }

// exemplo declarando as chaves e valores do objeto
// for(let [chave, valor] of Object.entries(produto)) {
//   console.log(chave, valor);
// }
// exemplo declarando as chaves e valores do objeto
// for(let valor of Object.entries(produto)) {
//   console.log(valor);
// }

// funciona mas é estranho
for(let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}

// DESCOMENTE PARA VER OS RESULTADOS ACIMA
// console.log(produto); //  produto aqui vai retornar sem o item preço

