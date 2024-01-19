class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }
    attack(){
        let attackName = ""
        if (this.tipo === "Mago" ) {
            attackName += "Magia"
        } else if (this.tipo === "Guerreiro"){
            attackName += "Espada"
        } else if (this.tipo === "Monge"){
            attackName += "Artes marciais"
        } else if (this.tipo ==="Ninja"){
            attackName += "Shuriken"
        } else {
            attackName += "'ATAQUE INDISPONIVEL'"
        }

        console.log(`O ${this.tipo} atacou usando ${attackName}!`)
    }
}

let heroi1 = new heroi("Finn", 4500, "Mago")
heroi1.attack()

let heroi2 = new heroi("Weasley", 55, "Guerreiro")
heroi2.attack()

let heroi3 = new heroi("Satan", 989, "Monge")
heroi3.attack()

let heroi4 = new heroi("Jack", 45, "Ninja")
heroi4.attack()

let heroi5 = new heroi("Hadrick", 45, "nULL")
heroi5.attack()

