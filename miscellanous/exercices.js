
function displayDay() {
    let isToday = new Date();
    let Today = isToday.getDay();
    let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    console.log('Today is : ' + dayList[Today] + '.');
}

function getCurrentTime() {
    let getCurrentDay = new Date();
    let isCurrentHour = getCurrentDay.getHours();
    let isCurrentMinutes = getCurrentDay.getMinutes();
    let isCurrentSeconds = getCurrentDay.getSeconds();
    let isAMorPM = isCurrentHour > 12 ? 'AM' : 'PM';
    console.log('Current Time is : ' + isCurrentHour + ' ' + isAMorPM + ' : ' + isCurrentMinutes + ' : ' + isCurrentSeconds);
}

function remainingDayBeforeChristmas() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let remaining = 365 - day;
    console.log('Day of year: ' + day);
    console.log('Remaining days before christmas : ' + remaining)


}

function checkIfNumberGreaterThan13() {
    let isInput = Math.round(Math.random() * 20);
    let valueToCheck = 13;
    let returnValue = 0;
console.log('Value input is : ' + isInput);

    if (isInput > valueToCheck) {
        returnValue = (isInput - 13) * 2;
        console.log('The number is greater than 13 : ' + isInput + '. The return value is the double of the difference: ' + returnValue);
        return (returnValue);
    } else {
        console.log('The return value is lesser than 13 : ' + returnValue);
    }
}

function findTheLargestInteger() {
    let firstInteger = Math.floor(Math.random() * 10000 + 1);
    let secondInteger = Math.floor(Math.random() * 10000 + 1);
    let thirdInteger = Math.floor(Math.random() * 10000 + 1);
    let isIntegersGiven = [firstInteger, secondInteger, thirdInteger];

    const maxLargestInteger = Math.max(...isIntegersGiven);
    let findLargestInteger = '';

    maxLargestInteger == firstInteger ? findLargestInteger = '. It is the first integer !' : '';
    maxLargestInteger == secondInteger ? findLargestInteger = '. It is the second integer !' : '';
    maxLargestInteger == thirdInteger ? findLargestInteger = '. It is is the third integer !' : '';

    console.log('first integer is : ' + firstInteger, ', second integer is : ' + secondInteger, ', third integer is : ' + thirdInteger);
    console.log('The largest integer value is : ' + maxLargestInteger + findLargestInteger);
}

console.log('Exercice 1');
displayDay();
getCurrentTime();

console.log('Exercice 2');
remainingDayBeforeChristmas();

console.log('Exercice 3');
checkIfNumberGreaterThan13();

console.log('Exercice 4');
findTheLargestInteger();