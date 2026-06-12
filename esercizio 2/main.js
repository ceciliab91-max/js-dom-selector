
const closeButton = document.getElementById("chiudi");
const notification = document.querySelector("#notifica");

closeButton.addEventListener("click", () => {
    notification.remove();

});