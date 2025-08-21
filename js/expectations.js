const prin = document.getElementById("prin");
const pr3tyVoiceline = document.getElementById("pr3tyVoice")

prin.addEventListener("click", () => {
    pr3tyVoiceline.play();
    console.log("Dang, You're Good!")
})