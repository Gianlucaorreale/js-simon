function getRandomUniqueNumbers(min, max, tot){
    const numbers = [];
    
    while(numbers.length < tot){
        const randomNumber = Math.floor(Math.random()*(max + 1 - min)) +min
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber); 
    }

    return numbers;
}

const getUserNumber = (min,max) => {
    let userNumber;
     while(isNaN (userNumber) || userNumber < min || userNumber > max){
        userNumber = parseInt(prompt(`inserisci un numero tra ${min} e ${max}`));
     }
    return userNumber;

}