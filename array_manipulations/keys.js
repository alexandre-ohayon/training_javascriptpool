// The keys() method returns an Array Iterator object with the keys of an array.

const fruits = ["Bananes", "Oranges", "Pommes", "Poires"];
const keys = fruits.keys();

for ( let x of keys ) {
    console.log(x);
}