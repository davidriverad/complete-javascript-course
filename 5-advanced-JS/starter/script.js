// Function constructor

var david = {
  name: "David",
  yearOfBirth: 1997,
  job: "Designer"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Rivera";

var david = new Person("David", 1997, "designer");
var jane = new Person("Jane", 1969, "teacher");
var mark = new Person("Mark", 1948, "retired");

david.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(david.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
