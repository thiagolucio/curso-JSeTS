const name = " ";
const anos = 50;
console.log('Nome: ','Thiago Alves','\n','Idade:', anos);

console.log("Texto 'String'",);
console.log('String "texto"');
console.log(`'textos ' "texto"`);
console.log(123448934, 12.88977766);
console.log(35, 88.99, 'Thiago Lúcio bittencourt');



const nome = 'Thiago';
const sobrenome = 'Lucio Bittencourt';
const idade = 49;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 1974 - idade;

console.log('\n');
console.log('\n');

//  console.log(nome + ' ' + sobrenome + ' tem' + idade + ' anos, pesa' + peso + ' kg`);
// Ou podemos usar...TEMPLATE STRINGS
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);