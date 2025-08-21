const quoteBox = document.getElementById("jevilBox");
const chaoschaos = document.getElementById("chaosvoice");

quoteBox.addEventListener("click", () => {
    chaoschaos.play();
    console.log("CHAOS! CHAOS!");
})

const minowos = document.getElementById("minowos");
const minosImage = "images/breakingitdown.gif";
const rickRoll = "images/rickroll.gif";

function checkValue(){
    let randomValue = Math.floor(Math.random() * 11) // 1 / 10 chance of loading Rick Astley instaed of Minos Prime when the page is loaded
    let currentState = false;

    if (randomValue == 1){
        currentState = true;
    } 
    else
    {
        currentState = false;
    }

    return currentState;
}

function setImage(overrided)
{
    let state = overrided || checkValue()
    
    if(state){
        minowos.src = rickRoll;
    }
    else{
        minowos.src = minosImage;
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    setImage();
})

// Force Rickroll through command line

function forceRickRoll(){
    setImage(true)
}