// Funcoes que pausam o código. Lazy evaluation. Traz um valor por execuçao. Em etapas.
function* geradora1() {
  // Código qualquer ...
  yield 'Valor 1';
  // Código qualquer ...
  yield 'Valor 2';
  // Código qualquer ...
  yield 'Valor 3';
}

// exemplo de repetiçao "for let in" com uma funcao geradora.
const gx = geradora1();
for (let valor of gx) {
  console.log('VALORES >', valor);
}

// Criando um gerador Infinito - Ele é bom pra criar gerador de id de usuários por exemplo:
/* o valor de "i" abaixo pode ser os usuários que vierem entrando...joga um valor máximo de usuários que poderá suportar
  e enquanto não chegar nele ele vai criando um novo id de usuários com base em um contador que vai sendo incrementado
  baseado no último número total de usuários mais 1 */
function* geradora2() {
  let i = 0; 

  while(true) {
    yield i;
    i++;
  }
}


function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

// Delega parte do serviço dessa geradora para a geradora3
function* geradora4() {
  yield* geradora3(); // a geradora vai gerar 1, 2, 3 - o Asterisco no "yield" significa que ele vai delegar para a geradora
  yield 3;
  yield 4;
  yield 5;
}
// geradora(3) está fornecendo o 0, 1, 2
// geradora(4) está fornecendo o 3, 4, 5
const g4 = geradora4();
for (let valor of g4) {
  console.log('LISTA FUNCAO GERADORA >', valor); // vai retornar 0, 1, 2, 3, 4, 5
}

function* geradora5() {
  yield function() {
    console.log('Vim do y1');
  };

  return function() {
    console.log('Vim do return');
  };

  // ...

// Esse yield abaixo não existe mais por conta do return acima que encerra a execução com o return.
  yield function() { 
    console.log('Vim do y3');
  };
}

const g5 = geradora5();
const func1 = g5.next().value; // retorna o valor do y1
// Vai executar o return que encerra a execução
const func2 = g5.next().value; // vai dar erro
const func3 = g5.next().value; // vai dar erro

func1();
func2();
func3();