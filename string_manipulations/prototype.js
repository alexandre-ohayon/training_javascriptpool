// The prototype is a property available with all JavaScript objects.
//
// The prototype property allows you to add new properties and methods to strings.

function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);

console.log(fred);