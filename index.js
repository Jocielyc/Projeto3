class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken",
        };

        const ataque = ataques[this.tipo] || "um ataque desconhecido";
        
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

const heroi1 = new Heroi("Gandalf", 1000, "mago");
const heroi2 = new Heroi("Arthur", 35, "guerreiro");
const heroi3 = new Heroi("Bruce", 30, "monge");
const heroi4 = new Heroi("Naruto", 17, "ninja");

heroi1.atacar(); // O mago atacou usando magia.
heroi2.atacar(); // O guerreiro atacou usando espada.
heroi3.atacar(); // O monge atacou usando artes marciais.
heroi4.atacar(); // O ninja atacou usando shuriken.
