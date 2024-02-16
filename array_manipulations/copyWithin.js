// copyWithin : method than copy the first elements of an array to a position on elements of array

// first case : copy the first element of an array to a position on elements of array

const fruits = ["Banane", "Pomme", "Poire", "Orange"];

newFruits = fruits.copyWithin(2, 3);

console.log(newFruits);

// second case : copy multiples elements of an array to a position on elements of array
// target, start, end

const Cars = ["Audi", "Mercedes", "Volkswagen", "Toyota", "Volvo", "Skoda", "Lada", "UAZ", "Renault"];

newCars = Cars.copyWithin(6, 0, 2);

console.log(newCars);


