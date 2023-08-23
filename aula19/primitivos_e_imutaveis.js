/*
1)Valores serão copiados (são primitivos) - imutáveis: string, number, boolean, undefined, null (bigint, symbol)

2) Passados por referência (são mutáveis): array, object, function
*/
         // 0123
// let nome = 'Luiz';
// nome[0] = 'T'; // o valor é imutável
// console.log(nome[0], nome);


// let a = 'A';
// let b = a; // copia
// console.log(a, b);

// a = 'X';
// console.log(a, b);

// Exemplo de passagem por referência 
// let a = [1, 2, 3];
// let b = a; // ocupa o mesmo espaço na memória de 'a'.

// let c = b;
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// Exemplo de passagem por cópia
// let x = [...a]; // passando dessa forma vc faz uma cópia de a
// console.log(a, b, x);

// a.push(4);
// console.log(a, b, x);

// b.pop();
// console.log(a, b, x);

// x.push(5)
// console.log(a, b, c, x);

// a.push(8);
// console.log(a, b, c, x);



// Outro exemplo de passagem por referência
const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

// b aponta para o mesmo local de a na memória. Um muda o valor de todos.
const b = a;
// para copiar a é necessário fazer um spread
const c = {...a};

b.nome = 'João';
console.log(a);
console.log(b);
a.nome = 'Neyder';
console.log('A --> ', a);
console.log('B --> ', b);
console.log('C --> ', c);

