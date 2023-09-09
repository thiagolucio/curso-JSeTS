// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// HERANÇAS
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

class DispositivoEletronico {
    constructor(nome) {
      this.nome = nome;
      this.ligado = false;
    }
  
    ligar() {
      if(this.ligado) {
        console.log(this.nome + ' já ligado');
        return;
      }
  
      this.ligado = true;
    }
  
    desligar() {
      if(!this.ligado) {
        console.log(this.nome + ' já desligado');
        return;
      }
  
      this.ligado = false;
    }
  }
  
  class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
      super(nome);
  
      this.cor = cor;
      this.modelo = modelo;
    }
  }
  
  // Abaixo praticamos a herança implementando a extensão da classe original
  class Tablet extends DispositivoEletronico { // extendemos a classe original "DispositivoEletronico". Melhor forma de se trabalhar com herança
    constructor(nome, temWifi) { // ele está criando uma nova prop chamada temWifi
      super(nome); // indica que o "nome" vem do Pai

      this.temWifi = temWifi;// adcionou mais uma propriedade para este cara      
    }
  
    ligar() { // se ele não achar esse método ligar aqui ele vai procurar l
      console.log('Olha, você alterou o método ligar.'); 
    }
  
    falaOi() { // se ele não encontrar esse método ele vai procurar no Pai dele
      console.log('Oi');
    }
  
    static criador(nome, temWifi) {
      return new Tablet.prototype.constructor(nome, temWifi);
    }
  }
  
  // USANDO 

//   const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
// //   console.log(s1);
//     s1.ligar(); //  não é um setter por isso tem de invocar a funcao *()
//     s1.ligar(); //  aqui ele retorna e mensagem "Samsung já ligado" pois ele já está true
//     // s1.desligar(); //  não é um setter por isso tem de invocar a funcao *()
//   console.log(s1);
  
  const t1 = Tablet.criador('iPad', true);
  t1.falaOi();
  t1.ligar();
  console.log(t1);