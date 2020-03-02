///////////////////////////////////////
// Lecture: Hoisting


// var currentYear = 2020;
// calcAge(1998);

// // Function declaration
// function calcAge(year) {
//     console.log(currentYear - year);
// }

// // retirement(1997);
// // Function expression
// var retirement = function (year) {
//     console.log(65 - (currentYear - year));
// }

// retirement(1997);
// calcAge(1997);

// // variables

// console.log(age);
// var age = 23;
// console.log(age);


// function foo() {
//     age = 65;
//     console.log(age);
// }

// foo();
// console.log(age)














///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//  

var david = {
    name: 'David',
    birthYear: 1997,
    calcAge: function () {
        console.log(this);

    }
}
david.calcAge(1997)




