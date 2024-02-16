// Get the Unicode of the first character in a string:

let text = "HELLO WORLD";
let codeVar = text.charCodeAt(0);

for (let i = 0; i < text.length; i++) {
    codeVar = text.charCodeAt(i);
    console.log(codeVar);
}