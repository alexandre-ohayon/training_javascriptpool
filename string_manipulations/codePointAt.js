//The codePointAt() method returns the Unicode value at an index (position) in a string

let text = "HELLO WORLD";
let codeVar = text.codePointAt(0);

for (let i = 0; i < text.length; i++) {
    codeVar = text.codePointAt(i);
    console.log(codeVar);
}