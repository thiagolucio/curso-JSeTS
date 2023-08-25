/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

&& - Todas as expressoes precisam ser verdadeiras para que o resultado seja verdadeiro
|| - Todas as expressoes precisam ser falsas para que o resultado seja falso
*/

// console.log('Thiago' && 0 && 'maria'); // Retorna 0 porque é o valor que ele encontrou falso.

// console.log('Thiago' && true && 'maria'); // Retorna 'maria' porque todos são verdadeiros e ele retorna
// o valor da última afirmação.

/*
- Valores que são avaliados como falso em JS:
false
0
''
""
``
null
undefined
NaN


// Curto circuito
function falaOi ()  {
    return "Oi";
}

let vaiExecutar = false;
// vaiExecutar && falaOi(); // Retorna "False"
console.log(vaiExecutar && falaOi()); // Retorna "false"
*/

/*
|| -> true && false  -> vai retornar "o valor verdadeiro"

console.log(0 || false || null || Thiago' || true); // Retorna "Thiago" porque é o único que possui valor e é verdadeiro
*/
