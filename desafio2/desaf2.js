//array com os niveis (rank)
let ranking = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"]

//chamada da função
let saldo = victoryDefeats(101, 10)

//função para calcular as vitorias
function victoryDefeats(victory, defeat) {
    return victory - defeat       
}

//variavel vazia para chamar valor de acordo com o nivel dentro do switch 
let nivel = ""

//estrutura de decisão
for (i = 0; i < ranking.length; i++) {
    switch (true) {
        case (saldo <= 10):
            nivel = ranking[0]
            break;
        case (saldo >= 11 && saldo <= 20):
            nivel = ranking[1]
            break;
        case (saldo >= 21 && saldo <= 50):
            nivel = ranking[2]
            break;
        case (saldo >= 51 && saldo <= 80):
            nivel = ranking[3]
            break; 
        case (saldo >= 81 && saldo <= 90):
            nivel = ranking[4]
            break;
        case (saldo >= 91 && saldo <= 100):
            nivel = ranking[5]
            break;   
        default:
            nivel = ranking[6];
            break;
    }
}

console.log (nivel)

