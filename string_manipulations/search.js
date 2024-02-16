// The search() method matches a string against a regular expression **
//
// The search() method returns the index (position) of the first match.
//
// The search() method returns -1 if no match is found.
//
// The search() method is case sensitive.

let text = "Mr. Blue has a blue house";
let position = text.search(/blue/);

console.log(position);