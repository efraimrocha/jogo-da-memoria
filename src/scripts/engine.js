
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

let openCards = [];

// Faz sorteio baseado em pesos
let shuffeEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1));

// Desenhando os elementos
for(let i=0; i < emojis.length; i++){

    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffeEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);

}

function handleClick(){

    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
};

// Verifica se os cards são iguais e se não vouver mais cards 
function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        // Se não forem iguais remove a classe e volta a se econder.
        openCards[0].classList .remove("boxOpen");
        openCards[1].classList .remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length===emojis.length){
        alert("Voce ganhou!!!!")
    }

}