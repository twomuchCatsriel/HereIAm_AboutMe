const quoteBox = document.getElementById("jevilBox")
const chaoschaos = document.getElementById("chaosvoice")

quoteBox.addEventListener("click", () => {
    chaoschaos.play()
    console.log("CHAOS! CHAOS!")
})