// Muito usado para tratar erros. Isso porque o catch é muito usado para capturar erros em uma funçao por exemplo. 

/* A estrutura é....
 Se ocorrer algum erro dentro do bloco do Try ele será capturado em seguida pelo catch para que possa ser tratado pelo dev.
 No final de tudo é executado o finally ocorrendo erro ou não.
*/

function soma(x, y) {
  if (
    typeof x !== 'number' || 
    typeof y !== 'number'
  ) {
    throw new Error('x e y precisam ser números.');
  }
  return x + y;
}

// TRY - CATCH - FINALLY
try {
  // console.log(soma(1, 2));
  console.log(soma('1', 2));
  // vc também poderia criar mais um try -catch - finally aqui dentro
} catch(error) {
  console.log('TRATANDO O ERRO ::::::> ', error);
} finally {
  console.log('SEMPRE SOU EXECUTADO.'); 
}



