class baseDoHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){

        let dadoDeXp = 0
        while(dadoDeXp <= 1){
            dadoDeXp = Math.floor(Math.random() * 100)
        }

        let ataque
    
        if (this.tipo == "mago") {
            ataque = "magia"
        } else if (this.tipo == "guerreiro") {
            ataque = "espada"
        } else if (this.tipo == "monge") {
            ataque = "artes marciais"
        } else if (this.tipo == "ninja") {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} usou ${ataque} e está nível ${dadoDeXp}`)
    }
}

let heroiUm = new baseDoHeroi("Luiz", "18", "guerreiro") 
console.log(heroiUm)
heroiUm.atacar()
