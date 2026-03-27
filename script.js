const btn = document.getElementById("deny_button");

btn.addEventListener("click", function() {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
});