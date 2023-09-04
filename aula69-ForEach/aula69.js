// ForEach só está disponível dentro de arrays e NÃO PODE SER USADO EM OBJETOS


const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
a1.forEach(function(valor, indice, array) {
  // console.log(indice); // vai mostrar os índices do array
  // console.log(valor); // vai mostrar os valores dentro do array
  // console.log(array); // Ele vai mostrar o array em cada loop do forEach
  // console.log(array[indice]); // uma forma meio tosca de mostrar os valores dentro do array
});


a1.forEach(valor => console.log(valor));

// console.log(a1);

// const a1 = [10, 20, 30];
// let total = 0;

// a1.forEach(valor => {
//   total += valor;
// });

// console.log(total);
