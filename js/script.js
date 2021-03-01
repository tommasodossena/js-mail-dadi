/* 
ESERIZIO 2: DADI
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer 
Stabilire il vincitore, in base a chi fa il punteggio più alto. 
*/

// 1 - Genero il numero del giocatore
var giocatore = Math.floor(Math.random() * 6) + 1;
alert("il numero ottenuto dal tuo dado è " + giocatore);

// 2 - Genero il numero del computer
var computer = Math.floor(Math.random() * 6) + 1    
alert("il numero ottenuto dal dado del computer è " + computer);

// 3 - Vince il punteggio piu alto
if (giocatore > computer) {
    alert("Congratulazioni! Il punteggio del tuo dado (" + giocatore + ") è superiore al punteggio ottenuto dal computer (" + computer + ").");
} else if (giocatore == computer) {
    alert("Patta, riprova! Il tuo dado e quello del computer hanno ottenuto lo stesso punteggio (" + giocatore + ").");
    location.reload()
} else {
    alert("Hai perso, riprova! Il punteggio ottenuto dal computer (" + computer + ") è superiore al punteggio del tuo dado (" + giocatore + ").");
    location.reload()
}