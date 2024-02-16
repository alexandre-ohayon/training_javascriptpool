// filter() method return an array of all values selected

const studentNotes = [10.5, 14, 7, 15.5, 5, 13];

const notesAboveTen = studentNotes.filter(checkNotes);

function checkNotes(studentNotes) {
    return studentNotes >= 10;
}

console.log(notesAboveTen);