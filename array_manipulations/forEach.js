const numbers = [65, 44, 12, 4];


numbers.forEach(multiplyByTen);

function multiplyByTen(item, index, arr) {
    arr[index] = item * 10;
    return (arr);
}

console.log(numbers);

const str = ["toto", "titi", "tata"];

str.forEach(addStr);

function addStr(item, index, arr) {
    arr[index] = item + "dataInjected";
};

console.log(str);