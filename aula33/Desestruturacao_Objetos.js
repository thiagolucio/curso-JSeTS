
// Atribuição via desestruturação
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

const { nome, sobrenome, ...resto } = pessoa; // extraindo do objeto pessoa os atributos nome e sobrenome
// const { nome, ...resto } = pessoa; // extraindo do objeto pessoa os atributos nome e sobrenome
console.log('PRIMEIRA > ', nome, resto); //aqui só nao vai mostrar o sobrenome

const {nome: teste = '', sobrenome: segundoNome = ''} = pessoa;
console.log('SEGUNDA > ', teste, segundoNome);

const { endereco: { rua, numero } } = pessoa;
console.log('TERCEIRA > ', rua, numero);