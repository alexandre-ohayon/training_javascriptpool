// find is a method to find the value of the first element whom return the index of the value in the array

const studentNotes = [10.5, 14, 7, 15.5, 5, 13];

function checkNotes(studentNotes) {
    return(studentNotes >= 5 && studentNotes <= 8.5);
}

console.log(studentNotes.findIndex(checkNotes));