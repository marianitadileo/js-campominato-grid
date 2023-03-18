// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// grid e button
const grid = document.querySelector(".grid");
const button = document.getElementById("btn");

// gestiamo il bottone quando viene cliccato
button.addEventListener("click", function (){
    for (let i = 1; i <= 100; i++) {
        const myBox = document.createElement("div")
        myBox.classList.add("grid-items");
        grid.append(myBox);
        myBox.innerHTML = i;
        myBox.addEventListener("click", boxClick)
    }
});

 function boxClick(){ 
    this.classList.add("bc");
    console.log(this.innerText);
}

