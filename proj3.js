class hero {
    constructor(nome,idade,tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    };

    habilidades(){
        let poder

        if (this.tipo === "mago") {
               poder = " magia"
        }
        else if (this.tipo === "guerreiro"){
            poder = " Golpe de espada"
        }
        else if (this.tipo === "arqueiro"){
            poder = " Flexadas"
        }
        return poder
       
    };

    atacar() {
        let poder = this.habilidades()
         console.log ("O " + this.tipo + " atacou usando:" + poder)
        }
};

let atributos = new hero("Leonardo","29","arqueiro");
atributos.atacar()
