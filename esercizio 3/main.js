const counterButton = document.getElementById("conta");
let count = 0;

counterButton.addEventListener("click", () => {
    count++;
    counterButton.textContent = "Click: " + count;

});