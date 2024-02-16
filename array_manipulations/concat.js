// Joins multiple arrays - Return an array with the joined arrays

// first case : concatening two arrays

const Usernames = ["Alexandre", "Thomas", "Matthieu"];
const otherUsernames = ["Jean", "Clara", "Léa"];

const updatedUsernames = Usernames.concat(otherUsernames);

console.log(updatedUsernames);

// second case : concatening more than two arrays

const PricyCars = ["Audi", "Mercedes", "Volkswagen"];
const MediumRangeCars = ["Toyota", "Volvo", "Skoda"];
const BasicCars = ["Lada", "UAZ", "Renault"];

const CarsLabels = PricyCars.concat(MediumRangeCars, BasicCars);

console.log(CarsLabels);