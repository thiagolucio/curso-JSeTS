class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  // ATENÇÃO !!!!  -> Os métodos Estáticos não tem acesso aos dados da instância. Isso porque não chamamos o new
  // Só pra re-fixar. O this sempre vai procurar a prop declarada depois dela no escopo anterior ou que aquele function está contida
  static trocaPilha() {
    console.log('Trocando a Pilha');
  }
  static soma(x, y) { // o soma não tem acesso aos dados da instância (aumentarVolume, diminuirVolume, etc)
    return x + y;
    console.log(this);
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
console.log('metodo estático: ', ControleRemoto.soma(5, 8));
