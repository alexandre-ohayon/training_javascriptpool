// The split() method splits a string into an array of substrings.
//
// The split() method returns the new array.
//
// The split() method does not change the original string.
//
// If (" ") is used as separator, the string is split between words.

let text = "How are you doing today?";
const myArray = text.split(" ");
let word = myArray[4];
console.log(word);