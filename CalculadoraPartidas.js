function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base no número de vitórias
    switch (true) {
        case vitorias < 10:
            nivel = "Ferro";
            break;
        case vitorias <= 20:
            nivel = "Bronze";
            break;
        case vitorias <= 50:
            nivel = "Prata";
            break;
        case vitorias <= 80:
            nivel = "Ouro";
            break;
        case vitorias <= 90:
            nivel = "Diamante";
            break;
        case vitorias <= 100:
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}

// Exemplo de uso
const vitorias = 65;
const derrotas = 20;

console.log(calcularRank(vitorias, derrotas));
