sources = ["aLetter.svg", "elLetter.svg", "pLetter.svg", "eLetter.svg", "rLetter.svg"];
order = ["first" , "second", "third", "fourth", "fifth"]

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");

function startingProcess(){
    let score=0;
    document.getElementById("score").innerText = score;
    first.src = sources[0];
    second.src = sources[1];
    third.src = sources[2];
    fourth.src = sources[3];
    fifth.src = sources[4];
}

function shuffle(){
    let svgArray = [0, 0, 0, 0, 0];
    for(let index = 0; index < 5; index += 1){
        let randomNumber = Math.floor(Math.random() * 5);
        while(svgArray[randomNumber] != 0){
            randomNumber = Math.floor(Math.random() * 5);
        } 
        svgArray[randomNumber] = index;
    }
    return svgArray;
}

function fold(){
    first.src = "dark.webp";
    second.src = "dark.webp";
    third.src = "dark.webp";
    fourth.src = "dark.webp";
    fifth.src = "dark.webp";
}


function shuffleAndDisplay() {
    deck = shuffle();
    first.src = sources[deck[0]];
    second.src = sources[deck[1]];
    third.src = sources[deck[2]];
    fourth.src = sources[deck[3]];
    fifth.src = sources[deck[4]];
}

document.getElementById("restarterButton").addEventListener("click", function(){
    startingProcess();

    // Display original images for 2 seconds
    setTimeout(function () {
        // Shuffle and display shuffled images
        shuffleAndDisplay();

        // Fold into dark images after 2 seconds
        setTimeout(fold, 2000);
    }, 2000);

});

