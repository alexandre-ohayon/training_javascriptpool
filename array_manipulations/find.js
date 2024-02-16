// find is a method to find the value of the first element with selected value in an array

const studentNotes = [10.5, 14, 7, 15.5, 5, 13];

function checkList(studentNotes) {
    return studentNotes > 15;
}

console.log(studentNotes.find(checkList));

function checkAllNotes(studentNotes) {
    let notes = [];
    let i = 0;
    for (; i < studentNotes.length; i++) {
        if (studentNotes[i] >= 10 && studentNotes[i] <= 20) {
            notes.push(studentNotes[i]);
            console.log("i = %s | notes is : %s", i, notes);
        } else {
            console.log("i = %s | the value does not enter in the strategy : %s", i, studentNotes[i]);
        }
    }
    return(notes);
}

checkAllNotes(studentNotes);