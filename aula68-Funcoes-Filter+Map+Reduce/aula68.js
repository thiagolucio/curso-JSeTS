// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
  .filter(valor => valor % 2 === 0) // Filtrar pares
  .map(valor => valor * 2) // multiplica por dois os números pares retornados
  .reduce((acumulador, valor) => acumulador + valor); // Reduzir (soma todos os pares)

console.log(numerosPares) ;
