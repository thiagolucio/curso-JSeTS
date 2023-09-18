// FILE SYSTEM -  https://nodejs.org/docs/latest-v20.x/api/fs.html#fspromiseschownpath-uid-gid
const fs = require('fs').promises;
const path = require('path');

 
// fs.readdir('./') // lendo o que tem dentro da pasta raiz. A pasta "node"
// .then(files => console.log(files))
// .catch(e=> console.log(e));

// fs.readdir(path.resolve(__dirname)) // lendo o que tem dentro do próprio arquivo usando o path resolve
// .then(files => console.log(files))
// .catch(e=> console.log(e));


// Criando uma funcao para ler os arquivos usando async ao invés de then e catch. 
async function readdir(rootDir) { // recebendo um caminho raiz. o chamado "rootDir"
  rootDir = rootDir || path.resolve(__dirname); // rootDir vai receber ele mesmo se for informado se não ele pega o próprio caminho da pasta onde está
  const files = await fs.readdir(rootDir); // files recebe a rootDir
  walk(files, rootDir); // recebe a funcao walk e passa os arquivos dentro do rootDir informado
}

async function walk(files, rootDir) { // funcao que vai caminhar dentro do rootDir
  for(let file of files) { // cria um for para percorrer os arquivos
    const fileFullPath = path.resolve(rootDir, file); // fileFullPath vai recer o caminho do arquivo e o arquivo
    const stats = await fs.stat(fileFullPath); // stats pega dados estatísticos - https://nodejs.org/docs/latest-v20.x/api/fs.html#class-fsstats

    if (/\.git/g.test(fileFullPath)) continue; // se for um arquivo git, continue
    if (/node_modules/g.test(fileFullPath)) continue; // se for node_modules,  continue
    
    if(stats.isDirectory()) { // se o stats retornar true caso seja um diretório, execute a funcao abaixo
      readdir(fileFullPath); // execute a funcao "readdir" com o caminho do arquivo "fileFullPath" e liste todos os arquivos deste diretório
      continue; // depois de executar a funcao continue
    }
    
    if (/\.css$/g.test(fileFullPath)) continue; // se for arquivo CSS, continue ... mostre o caminho completo de todos os arquivos css
    if (!/\.html$/g.test(fileFullPath)) continue; // se for diferente um arquivo html continue ... mostre o caminho completo de todos os arquivos html
    console.log(fileFullPath);
  }
}
readdir('/run/media/thiagolucio/HDEXTH/REPOSITORIOS/curso-JSeTS/'); // executando a funcao chamando ela
