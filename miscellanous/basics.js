const someArr = [1, 2, 3, 4, 5];

// Exercice 1

const doubleArr = someArr.map(x => x*2)

// Exercice 2

const evenArr = someArr.filter(number => number%2 == 0)

const oddArr = someArr.filter(number => number%2 != 0)

// Exercice 3
const maxValueArr = Math.max(...someArr);
const minValueArr = Math.min(...someArr);

// Exercice 4
const sumValueArr = someArr.reduce((prev, curr) => prev + curr);

// Exercice 5

const isOddValueArr = (curr) => curr > 0;

const isAlsoOddArr = someArr.filter(number => number%2 != 0).length != 0

// Exercice 6

const userList = [
    { name: "John", gender: 'M', salary: 35000 },
    { name: "Jade", gender: 'F', salary: 42000 },
    { name: "Joe", gender: 'M', salary: 35000 },
    { name: "Jacky", gender: 'F', salary: 38000 }
];

// Combien les hommes gagneraient au total s'ils etaient augmentés de 1000 euros chacuns ?

const totalSalaryMens = userList
                        .filter(user => user.gender === 'M')
                        .map(user => user.salary = user.salary + 1000)
                        .reduce((totalSalaryMens, salaryMen) => totalSalaryMens + salaryMen);
console.log(totalSalaryMens);