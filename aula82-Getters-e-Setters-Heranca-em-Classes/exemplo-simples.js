class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // nomeCompleto() {
    //     return `${this.nome} ${this.sobrenome}`;
    // }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' '); // vai formar um array chamado "valor" com nomes separados por espaco
        this.nome = valor.shift(); // remove e retorna o primeiro elemento do array
        this.sobrenome = valor.join(' '); // junta os elementos do array
    }
}

const novaPessoa = new Pessoa('Thiago', 'Bittencourt');
console.log(novaPessoa.nomeCompleto); // como getter (get) não é uma função vc não precisa mandar executar com ()
// console.log(novaPessoa.nomeCompleto()); // se declarado como funcao como na linha 7. Tem de chamar como uma funcao COM ()
console.log(novaPessoa.nome)
console.log(novaPessoa.sobrenome);