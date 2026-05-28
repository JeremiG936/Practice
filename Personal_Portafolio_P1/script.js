const theSong = document.getElementById("theSong");
const playButton = document.getElementById("playButton");
const rewindButton = document.getElementById("rewindButton");

console.log(theSong)

playButton.addEventListener("click", function(){
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