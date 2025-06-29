const bouton = document.getElementById("button1");
const box = document.getElementById("box");
const body = document.getElementById("body");

let positionGauche = true;

bouton.addEventListener("click", function () {
    if (positionGauche) {
        bouton.style.transform = "translateX(50px)";
        bouton.style.background = "white";
        box.style.background = "black";
        body.style.background = "white";
    } else {
        bouton.style.transform = "translateX(0)";
        bouton.style.background = "black";
        box.style.background = "white";
        body.style.background = "black";
    }
    positionGauche = !positionGauche;
});

bouton.addEventListener("mouseenter", () => {
    box.style.boxShadow = "0px 0px 10px 12px gray";
});

bouton.addEventListener("mouseleave", () => {
    box.style.boxShadow = "0px 0px 10px 6px gray";
});