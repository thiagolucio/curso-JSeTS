// laço de repetição simples
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// laço de repetição com limites inicial e final
// for (let i = 400; i <= 1200; i++) { // valor inicial de 400 e final de 1200
//     console.log(`Linha ${i}`);
// }

const frutas = ['Maçã', 'Pêra', 'Uva'];

// modo clássico for clássico
for (let i = 0; i < frutas.length; i++) {
console.log(`Ìndice: ${i}`, frutas[i]);
}

// modo moderno de declarar o For
const novasFrutas = frutas.map(el => el.toLowerCase());
console.log('Array:', novasFrutas); // [ 'maçã', 'pêra', 'uva' ]
