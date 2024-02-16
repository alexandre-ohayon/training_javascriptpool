// fill all the elements selected with a value

// first case : if no elements specified, it fill every elements of the array

const basket = ["Dentifrice", "Pomme", "Perrier", "Saumon", "Baguette"];

basket.fill("Kiwi");

console.log(basket);

// second case : fill selected elements of the array. start (default is 0), end

const wishList = ["Colgate", "Kiwi", "Coca", "Petit LU", "Nutella"];

wishList.fill("Sauce samurai", 1, 2);

console.log(wishList);