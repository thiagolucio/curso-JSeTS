// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

// Em um caso como o abaixo vc poderia substituir esse código por um ternário em JS
// const pontuacaoUsuario = 999;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }



const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
