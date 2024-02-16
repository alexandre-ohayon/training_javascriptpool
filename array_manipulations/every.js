// every method launch a function for each element of the array, and return a boolean

const ConscritsAgesList = [18, 24, 19, 13, 20, 29, 56, 45];

console.log(ConscritsAgesList.every(checkConscritAge));

function checkConscritAge(ConscritsAgesList) {
    return ConscritsAgesList > 18 && ConscritsAgesList < 35
}