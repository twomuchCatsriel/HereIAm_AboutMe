const quoteBox = document.getElementById("jevilBox");
const chaoschaos = document.getElementById("chaosvoice");

quoteBox.addEventListener("click", () => {
    chaoschaos.play();
    console.log("CHAOS! CHAOS!");
})

const minowos = document.getElementById("minowos");
const minosImage = "images/breakingitdown.gif";
const rickRoll = "images/rickroll.gif";

function checkValue(overrided){
    let randomRange = (overrided || 11)

    let randomValue = Math.floor(Math.random() * randomRange ) // 1 / 10 chance of loading Rick Astley isntead of Minos Prime when the page is loaded
    let currentState = false;

    console.log(randomValue);

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
        console.log("Never gonna give you up!");
    }
    else{
        minowos.src = minosImage;
        console.log("Prepare Thyself!");
    }
}

function setBackgroundImage(){ //1 / 1500 chance to rickroll the Background of the webpage lol
    if(checkValue(1501) == 1){
        document.querySelector("body").style.backgroundImage = "url(images/rickastleyBG.gif)"
        document.querySelector("body").style.color = "black" 
    }
}

document.addEventListener("DOMContentLoaded", () =>{
    setImage();
    setBackgroundImage();
})

// Force Rickroll through command line

function forceRickRoll(){
    setImage(true)
    
    return "He is giving you up"; 
}