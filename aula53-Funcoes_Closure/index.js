// Global
function retornaFuncao(nome) {
  return function(sobrenome) {
    return nome + ' ' + sobrenome;
  };
}

function falaNome(nome) {
  const sobrenome = 'Miranda';
  console.log(nome, sobrenome); // retorna nome Miranda
}

const func = retornaFuncao();
const funcao = retornaFuncao('Luiz'); // nome = Luiz
const funcao2 = retornaFuncao('João'); // nome = Luiz

console.log(func); // retorna funcao anonima

console.dir(funcao); // retorna funcao anonima (olhe no console inclusive do navegador)
console.dir(funcao2); // retorna funcao anonima (olhe no console inclusive do navegador)

console.log(funcao('Miranda'), funcao2('Oliveira')); // Luiz Miranda João Oliveira
