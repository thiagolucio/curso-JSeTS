const content = document.querySelector('.content');
const paragraph = content.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor; // pegou a cor de fundo do Body
console.log(backgroundColorBody);

for (let p of paragraph) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#FFFFFF';
}
