// map() creates a new array from calling a function for every array element.

const numbers = [4, 9, 16, 25];

console.log(numbers.map(multiplyByFive));

function multiplyByFive(numbers) {
    return (numbers * 5);
}

