// The some() method checks if any array elements pass a test (provided as a callback function).
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.

const basket = ["fruits", "vegetables", "ice cream"];

const verify = basket.some(checkVegetable);

function checkVegetable(element) {
    return element === "vegetables";
}

console.log(verify);