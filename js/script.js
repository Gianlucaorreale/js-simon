const display = document.getElementById('display');
let seconds = 30;
display.innerText = seconds

const countdown = setInterval(function(){
    display.innerText = --seconds

    if(seconds === 0){
        clearInterval(countdown);
    }
}, 1000)