// The slice() method extracts a part of a string.
//
// The slice() method returns the extracted part in a new string.
//
// The slice() method does not change the original string.
//
// The start and end parameters specifies the part of the string to extract.
//
// The first position is 0, the second is 1, ...
//
// A negative number selects from the end of the string.

let text = "Hello world!";
let result = text.slice(0, 5);

console.log(result);