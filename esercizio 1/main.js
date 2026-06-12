//VARIABILI
const lista = document.getElementById("lista");
const bottone = document.getElementById("aggiungi");
const input = document.getElementById("nuovo-articolo");

console.log(lista);
console.log(bottone);
console.log(input);

//LOGICA
bottone.addEventListener("click", () => {
    const nuovoItem = input.value;
    const nuovoLi = document.createElement("li");
    nuovoLi.textContent = nuovoItem;
    lista.appendChild(nuovoLi);
});