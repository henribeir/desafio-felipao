//variável para nome e nível do herói
let nomeHeroi = "Mark"
let nivelHeroi = 4234
let rankHeroi = ""

//estrutura de decisão para definir o rank de acordo com nível
if (nivelHeroi <= 1000) {
    rankHeroi = "Ferro"
} else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
    rankHeroi = "Bronze"
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
    rankHeroi = "Prata"
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
    rankHeroi = "Ouro"
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
    rankHeroi = "Platina"
} else if (nivelHeroi >= 9001 && nivelHeroi <= 10000) {
    rankHeroi = "Imortal"
} else {
    rankHeroi = "Radiante"
}

//mensagem do resultado
console.log ("O herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)