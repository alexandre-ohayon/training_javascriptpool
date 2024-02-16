// prototype add new properties and methods to arrays

var fruits = ["Banane", "Orange", "Pomme", "Mangue"];

Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

fruits.myUcase();



console.log(fruits);