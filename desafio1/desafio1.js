//variável para nome e nível do herói
let nomeHeroi = "Mark"
let nivelHeroi = 1001

//constante da frase que em cojunto da variável do nome do herói irá repertir por todo o código
const frase = "O heroi de nome " +nomeHeroi + " está no nivel "

//estrutura de decisão com a constante em conjunto da nomeclatura do nível de acordo com XP
if (nivelHeroi <= 1000) {
    console.log(frase + "Ferro")
} else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    console.log(frase + "Bronze")
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    console.log(frase + "Prata")
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
    console.log(frase + "Ouro")
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    console.log(frase + "Platina")
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    console.log(frase + "Imortal")
} else {
    console.log(frase + "Radiante")
}