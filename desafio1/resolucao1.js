//array com dados de nome e xp
let heroi = [
    {nome: "Markes", xp: 4234}
]

//laço de repetição e declaração de variaveis para retornar dados do array
for (repeticao = 0; repeticao < heroi.length; repeticao++) {
    let nomeHeroi = heroi[repeticao].nome
    let xpHeroi = heroi[repeticao].xp
    let nivelHeroi = ""

    //definir o nivel de acordo com xp
    if (xpHeroi <= 1000) {
        nivelHeroi = "Ferro"
    } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze"
    } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata"
    } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro"
    } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina"
    } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal"
    } else {
        nivelHeroi = "Radiante"
    }

//mensagem do resultado
console.log ("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
    


}
