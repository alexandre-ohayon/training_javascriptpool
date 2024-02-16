const numbers = [200, 10, 10];

let sum = numbers.reduce(getSum);

let sub = numbers.reduce(getSub);

function getSum(prev, curr) {
    return prev + curr;
}

function getSub(prev, curr) {
    console.log("prev : %s, curr : %s", prev, curr);
    return prev - curr;
}

console.log(sum);
console.log(sub);