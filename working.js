const flagsArray = [
    {
        country: "georgia",
        img: scr="images/georgia.png",
    },

    {
        country: "estonia",
        img: scr="images/estonia.png",
    },

    {
        country: "norway",
        img: scr="images/norway.png",
    },

    {
        country: "macedonia",
        img: scr="images/macedonia.png",
    },

    {
        country: "korea",
        img: scr="images/korea.png",
    },

    {
        country: "spain",
        img: scr="images/spain.png",
    },
    {
        country: "georgia",
        img: scr="images/georgia.png",
    },

    {
        country: "estonia",
        img: scr="images/estonia.png",
    },

    {
        country: "norway",
        img: scr="images/norway.png",
    },

    {
        country: "macedonia",
        img: scr="images/macedonia.png",
    },

    {
        country: "korea",
        img: scr="images/korea.png",
    },

    {
        country: "spain",
        img: scr="images/spain.png",
    },  

]

flagsArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let flagsChosen = [];
let cardsChosenId = [];
const cardWon = [];


function createBoard() {
    for (i = 0; i < flagsArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("#grid img")

    if (cardsChosenId[0] == cardsChosenId[1]) {
        cards[cardsChosenId[0]].setAttribute("src", "images/blank.png");
        cards[cardsChosenId[1]].setAttribute("src", "images/blank.png");
        alert ("You have clicked the same image!");
    } else if (flagsChosen[0] == flagsChosen[1]) {
        cards[cardsChosenId[0]].setAttribute("src", "images/white.png");
        cards[cardsChosenId[1]].setAttribute("src", "images/white.png");
        cards[cardsChosenId[0]].removeEventListener("click", flipCard);
        cards[cardsChosenId[1]].removeEventListener("click", flipCard);
        cardWon.push(flagsChosen);
    } else {
        cards[cardsChosenId[0]].setAttribute("src", "images/blank.png");
        cards[cardsChosenId[1]].setAttribute("src", "images/blank.png");
    }

    resultDisplay.innerHTML = cardWon.length;
    flagsChosen = [];
    cardsChosenId = [];

    if (cardWon.length == flagsArray.length / 2) {
        resultDisplay.innerHTML = "Well done!"
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    flagsChosen.push(flagsArray[cardId].country);
    cardsChosenId.push(cardId);
    this.setAttribute("src", flagsArray[cardId].img);

    if (flagsChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }
}