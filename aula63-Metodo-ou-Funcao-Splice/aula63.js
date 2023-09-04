//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

/* 
nomes.splice(índice atual, delete, elem1, elem2, elem3);
ex: nomes.splice(4, 1, 'Luiz', 'Otávio'); // vai remover Júlia - posicao 4 e deletar 1 elemento
na funcao acima vc indica:
 - Índice: Vai indicar a posição do elemento inicial do splice
 - Delete: Vai indicar quantos elementos serão removidos
 - Elementos para adicionar: elem1, elem2, elem3... 
*/

// nomes.splice(4, 1, 'Thiago', 'Otávio'); // vai remover Júlia e adicionar Thiago e Otávio a partir dessa posicao
// Unshift
// nomes.splice(2, 0, 'Thiago', 'Raquel'); // Vai adicionar Thiago e Raquel na posição 2. Splice 0 é adicionar no indice
// console.log(nomes);


// const removidos = nomes.splice(4, 1); // remove Júlia
// const removidos = nomes.splice(3, 2); // remove Gabriel(3) e Júlia(4)

// pop - Índices Negativos
// const removidos = nomes.splice(-1, 1); // remove Júlia(-1)
// const removidos = nomes.splice(-3, 2); // remove Eduardo(-3) e Gabriel(-2)
// const removidos = nomes.splice(-2, Numbe r.MAX_VALUE); // começa a remover de Gabriel(-2) ate o infinito deletando

// Push
// const removidos = nomes.splice(nomes.length, 0, 'Thiago', 'Lúcio');
// Vai adicionar Thiago e Lúcio na última posicao. Vc também poderia usar o push --- nomes.push() e até mesmo o unshift

// unshift
const removidos = nomes.splice(0, 0, 'Thiago', 'Raquel');



console.log(' Array original: ', nomes, '\n','Elemento removido: ', removidos);