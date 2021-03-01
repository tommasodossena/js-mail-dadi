/*
ESERIZIO 1: ACCESS LIST
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// 1 - Lista mail con permessi
var list = ["franco@mail.com", "pippo@mail.com", "pierino@mail.com", "mario@mail.com", "luigi@mail.com", "marcello@mail.com"];

// 2 - Chiedere all'utente di inserire la propria mail
var mail = prompt("inserisci la tua mail");

// 3 - Valore di default della verifica 
var check = false;

// 4 - Verificare se l'utente può accedere
for (var i = 0; i < list.length; i++) {
    if (mail === list[i]) {
        check = true;
    }
}

// 5 - Stampare a schermo l'esito del controllo
if (check) {
    alert("Indirizzo verificato, puoi accedere alla pagina");
} else {
    alert("Accesso negato, non puoi accedere alla pagina");
}

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
} else {
    alert("Hai perso, riprova! Il punteggio ottenuto dal computer (" + computer + ") è superiore al punteggio del tuo dado (" + giocatore + ").");
}