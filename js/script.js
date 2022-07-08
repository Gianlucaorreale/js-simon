/*Descrizione:
Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


const countdownElement = document.getElementById('countdown');
const numbersElement = document.getElementById('numbers-list');

const min = 1;
const max = 99;
const totalNumbers = 5;
let time = 30;



const numbers = getRandomUniqueNumbers (min, max, totalNumbers);

let items = '';

for (let i = 0; i < totalNumbers; i++ ){
    items += `<li>${numbers[i]}</li>`
}

numbersElement.innerHTML = items; 

const countdown = setInterval (()=>{
    if (time === 0) clearInterval (countdown);
    else countdownElement.innerText = --time;
}, 1000);

setTimeout (()=>{
   numbersElement.className = 'hidden';
} ,30000);

setTimeout (()=>{
const userNumbers = [];
while (userNumbers.length < totalNumbers){
    const userNumber = getUserNumber(min,max);
    if(!userNumbers.includes(userNumber)) userNumbers.push(userNumber);
}

let userPoints = 0;
for (let i = 0; i < totalNumbers; i++){
 if(numbers.includes(userNumbers[i])) userPoints++
}
alert (`hai totalizzato ${userPoints} punti`);

}, 30200)
