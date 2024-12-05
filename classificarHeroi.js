// Variáveis para armazenar o nome do herói e a quantidade de XP
let nome = prompt("Qual o nome do herói?"); // Entrada para o nome do herói
let xp = parseInt(prompt("Quantos XP o herói possui?")); // Entrada para a quantidade de XP

let nivel;

// Estrutura de decisão para verificar o nível do herói com base no XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp > 10000) {
    nivel = "Radiante";
}

// Exibe a mensagem formatada
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
