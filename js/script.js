const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".input");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        screen.innerHTML = "Hi";
    })
})