let sources = ["aLetter.svg", "elLetter.svg", "pLetter.svg", "eLetter.svg", "rLetter.svg"];
let order = ["first", "second", "third", "fourth", "fifth"];
let score = 0;
let deck = [0,0,0,0,0];
let gameEnded = 0;

document.getElementById("restarterButton").addEventListener("click", function(){
    deck = shuffle();
    orderArray = [-1, -1, -1, -1, -1];
    gameEnded = 0;
});

updateScore(true, 0);

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");

let orderArray = [-1, -1, -1, -1, -1];

function startingProcess() {
    first.src = sources[0];
    second.src = sources[1];
    third.src = sources[2];
    fourth.src = sources[3];
    fifth.src = sources[4];
};

function updateScore(reseter, change){
    if(reseter){
        score = 0;
    } else {
        score += change;
    }
    let scoreElement = document.getElementById("score");
    scoreElement.innerText = score;
}

function shuffle() {
    let newDeck = [0,0,0,0,0];
    for (let index = 0; index < 5; index += 1) {
        let randomNumber = Math.floor(Math.random() * 5);
        while (newDeck[randomNumber] != 0) {
            randomNumber = Math.floor(Math.random() * 5);
        };
        newDeck[randomNumber] = index;
    };

    if(newDeck == [0,1,2,3,4]){
        shuffle();
    };
    
    return newDeck;
};

function fold() {
    first.src = "dark.webp";
    second.src = "dark.webp";
    third.src = "dark.webp";
    fourth.src = "dark.webp";
    fifth.src = "dark.webp";
};

function display(deck) {
    first.src = sources[deck[0]];
    second.src = sources[deck[1]];
    third.src = sources[deck[2]];
    fourth.src = sources[deck[3]];
    fifth.src = sources[deck[4]];
};

function isEverythingSmaller(orderArray, letterNumber) {
    for (let i = 0; i < 5; i += 1) {
        if (orderArray[i] == letterNumber - 1) {
            return true;
        };
    };
    return false;
};

function restarterButton() {
    updateScore(true, 0);
    startingProcess();

    // Display original images for 2 seconds
    setTimeout(function() {
        // Shuffle and display shuffled images
        display(deck);

        // Fold into dark images after 2 seconds
        setTimeout(fold, 2000);
    }, 2000);
};

function cardClicked(numberOfOrder) {
    
    if(gameEnded == 0){ 
        if (document.getElementById(order[numberOfOrder]).src.endsWith("dark.webp")) {
            if (isEverythingSmaller(orderArray, deck[numberOfOrder])) {
                document.getElementById(order[numberOfOrder]).src = sources[deck[numberOfOrder]];
                updateScore(false, 20);
                orderArray[numberOfOrder] = deck[numberOfOrder];
            } else {
                document.getElementById(order[numberOfOrder]).src = sources[deck[numberOfOrder]];
                alert("Wrong Choice! You lost");
                gameEnded += 1;
            };
        };
    };
};

function starterButton(){
    if(gameEnded == 0){
        deck = shuffle();
        startingProcess();
        orderArray = [-1, -1, -1, -1, -1];

        // Display original images for 2 seconds
        setTimeout(function() {
            // Shuffle and display shuffled images
            display(deck);

            // Fold into dark images after 2 seconds
            setTimeout(fold, 2000);
        }, 2000);
    };
};