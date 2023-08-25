const  elementos = [
  {tag: 'p', texto: 'Qualquer texto que você quiser.'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'},
];

// for (let i = 0; i < elementos.length; i++) {
//   console.log(elementos[i].tag);
//   console.log(elementos[i].texto);
// }

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado); // o textCriado será child da tagCriada
  div.appendChild(tagCriada); // as tags serao filhas da div
}

container.appendChild(div);