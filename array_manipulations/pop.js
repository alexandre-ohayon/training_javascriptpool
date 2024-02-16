// the pop method removes the last element of an array. she changes the original array and return the removed element

const studentNotes = [10.5, 14, 7, 15.5, 5, 13];
console.log("Original array : %s", studentNotes);

let removedElement = studentNotes.pop();

console.log("New array : %s", studentNotes);
console.log("Removed element : %s", removedElement);

console.log(studentNotes);
console.log(removedElement);