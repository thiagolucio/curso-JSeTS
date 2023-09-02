
//                 0         1        2     
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// nomes[2] = 'Thiago';
// delete nomes[2];
// console.log(nomes); // [ 'Eduardo', 'Maria', <1 empty item> ] a posição do item2 vai estar vaga


// Vc pode (e em casos deve) criar um novo array usando um construtor
// const nomes = new Array('Eduardo', 'Maria', 'Joana');
// console.log(nomes);


// // Valor por referência
// const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// const novo = nomes; // foi passado por referência. Tudo que acontecer com um vai impactar o outro (novo e nome). os dois apontam para o mesmo lugar na memória
// novo.pop(); // novo e nomes vão perder um elemento
// console.log(nomes);
// console.log(novo);


// const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// const novo = [...nomes]; // copia o array
// novo.pop();
// console.log(novo);
// console.log(nomes); // vai permanecer intacto porque o spread copia


// const nomeRemovidoFinal = nomes.pop(); // POP sempre remove o ULTIMO item do array
// console.log('Array:', nomes, 'Item RemovidoFinal:', nomeRemovidoFinal);


// const nomeRemovidoInicio = nomes.shift(); // SHIFT sempre remove o PRIMEIRO item do array
// console.log('Array:', nomes, 'Item RemovidoInicio:', nomeRemovidoInicio);

// Adicionando items no final do array
// const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// const nome = nomes.push('Thiago');
// console.log(nome);
// console.log(nomes);


// adicionanco itens no início do array
// const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// const nome = nomes.unshift('Thiago'); // nesse caso as posições anteriores são movidas de suas posições
// console.log(nome);
// console.log(nomes);


// Fatiando um Array
//                 0         1        2        3          4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, 3); // vai fatiar da posição 1 até a 3. Isso é vai mostrar Maria e Joana
// const novo = nomes.slice(0, -1); // vai remover o último item do array
// const novo = nomes.slice(1, -2); // vai de Maria até joana. A partir da posição 1 vai remover od dois últimos items mostrando apenas Maria e Joana
// console.log(novo);


// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');


const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' '); // vai juntar os items (nomes),separando por um espaço
console.log(nome);
