/*Descrizione:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


const numbers = document.getElementById('numbers');
const display = document.getElementById('display');
let seconds = 30;
display.innerText = seconds
const totalNumbers = 5;

 
function random (){
    
    for(let i = 1; i <= 5; i++){
      numbers.innerText += `${i}`;
    }
}

random()

const countdown = setInterval(function(){
    display.innerText = --seconds

    if(seconds === 0){
        clearInterval(countdown);
    }
}, 1000)

setTimeout( function () {
    for(let i =1; i<5; i++){
        const insert = prompt('isnerisci i numeri')
    }
}, 30000)


