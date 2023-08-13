// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.

let variavelSoDeclarada; // esta variavel só foi declarada
let idadeCliente = number = 21;
nomeCliente = 'Thiago -';

let nomeCliente = 'Luiz';

console.log("Variavel só declarada ainda do tipo: ", variavelSoDeclarada);
variavelSoDeclarada = 22;
console.log('A mesma Variavel ao receber o dado acima se torna uma: ', typeof(variavelSoDeclarada));
variavelSoDeclarada = 'Este conteúdo é uma String';
console.log('A mesma Variavel ao receber o dado acima se torna uma: ', typeof(variavelSoDeclarada));

console.log('\n');

console.log(nomeCliente, 23, ' - Tipo de variável para idadeCliente: ', typeof(idadeCliente));
