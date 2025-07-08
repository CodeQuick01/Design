document.addEventListener("click", function(e) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    bubble.style.left = (e.clientX - 10) + "px";
    bubble.style.top = (e.clientY - 10) + "px";

    setTimeout(() => {
        bubble.remove();
    },1000);
});