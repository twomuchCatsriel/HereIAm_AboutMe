const quoteBox = document.getElementById("jevilBox")
const chaoschaos = document.getElementById("chaosvoice")

quoteBox.addEventListener("click", () => {
    chaoschaos.play()
    console.log("CHAOS! CHAOS!")
    // I currently do not have headphones so I cannot check if this works LOL. I hope it does
})