
// Cria os cards dinamicamente

// Cria lista de emojis
const emojis = [
    "👽",
    "👽",
    "👻",
    "👻",
    "🐶",
    "🐶",
    "🦉",
    "🦉",
    "🦋",
    "🦋",
    "🦇",
    "🦇"
];

// Faz sorteio baseado em pesos
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Desenhando os elementos

for (let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}

let openCards = [];


