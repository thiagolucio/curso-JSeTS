function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value, 
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `
    <p>
     <span>${nome.value}</span>
     <span>${sobrenome.value}</span>
     <span>${peso.value}</span>
     <span>${altura.value}</span>
    </p>
    `;
  }

  form.addEventListener('submit', recebeEventoForm);


}
meuEscopo();

/*  Exemplos de eventos
    onsubmit
    onchange
    onclick
    Todos os eventos começam por "on"
    etc...
*/

// Exemplo simples de como rodar eventos

// function meuEscopo () {
//   form.onsubmit = function (evento) {
//     evento.preventDefault();
//     alert(11);
//     console.log('Foi enviado!');
//   };
// };

// meuEscopo();