const taco = document.getElementById("taco");
const tacoQuote = document.getElementById("tacoQuote");

taco.addEventListener("click", () => {
    tacoQuote.play();
    console.log("You gotta stop defining your successes on how much others fail.")
})