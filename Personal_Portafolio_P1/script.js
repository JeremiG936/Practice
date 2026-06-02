const theSong = document.getElementById("theSong");
const playButton = document.getElementById("playButton");
const rewindButton = document.getElementById("rewindButton");
const generatorButton = document.getElementById("generatorButton");
const theFact = document.getElementById("theFact");
let factsList = ["Bananas are berries, but strawberries are not.",
"Sharks existed before trees, they have been around for over 400 million years.",
"Octopuses have three hearts, and two stop beating when they swim.",
"Honey never spoils, archaeologists have found edible honey in ancient Egyptian tombs.",
"Sloths can hold their breath longer than dolphins, up to 40 minutes.",
"Wombat poop is cube-shaped, which helps it stay in place and mark territory.",
"Water can boil and freeze at the same time, its called the “triple point.",
"Butterflies can taste with their feet.",
"Jellyfish are older than dinosaurs, they have been floating around for over 500 million years.",
"Koalas have fingerprints so similar to humans that they can confuse crime scene investigators."];

playButton.addEventListener("click", function() {
    if (theSong.paused === true) {
        theSong.play()
    }
    else {
        theSong.pause()
    }
})

rewindButton.addEventListener("click", function() {
    theSong.currentTime = 0
})

function randomGenerator() {
    let theNum = Math.floor(Math.random() * factsList.length);
    return factsList[theNum]
}

generatorButton.addEventListener("click", () => {
    theFact.textContent = randomGenerator();
})