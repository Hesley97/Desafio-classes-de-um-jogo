//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)

class Heroi{
	constructor(nome, idade, tipo, ataque){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
       	}
    
    atacar(){
    	console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
    }
}
let texto = new Heroi("Naruto", "17", "ninja", "shuriken")

texto.atacar()