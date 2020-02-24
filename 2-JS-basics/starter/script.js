// // var firstName = 'David';
// // var civilStatus = 'single';

// // if (civilStatus === 'married') {
// //     console.log(firstName + ' is married');
// // } else {
// //     console.log(firstName + ' is single');
// // }

// // var isMarried = true;

// // if (isMarried) {
// //     console.log(firstName + ' is married');
// // } else {
// //     console.log(firstName + ' is single');
// // }

// // var 


// // if (age < 13) {
// //     console.log(firstName + ' is a boy.');
// // } else if (age >= 13 && age < 20) {
// //     console.log(firstName + ' is a teenager.');
// // } else if (age >= 20 && age < 30) {
// //     console.log(firstName + ' is a young man.');
// // }
// // else {
// //     console.log(firstName + ' is a man.')
// // }

// // var firstName = 'David';
// // var age = 22;
// // var drink = age >= 18 ? 'beer' : 'juice';

// // age >= 18 ? console.log(firstName + ' drinks ' + drink) : console.log(firstName + ' drinks ' + drink);

// // console.log(drink);

// // var job = 'Driver';

// // switch (job) {
// //     case 'Designer':
// //         console.log(firstName + ' teaches kids how to design.');
// //         break;
// //     case 'Driver':
// //         console.log(firstName + ' drives a Sonata in Santo Domingo');
// //         break;
// //     case 'Teacher':
// //         console.log(firstName + ' teaches kids how to code.');
// //         break;
// //     default:
// //         console.log(firstName + ' does something else');

// // }

// // switch (true) {
// //     case age < 13:
// //         console.log(firstName + ' is a boy.');
// //         break;
// //     case age >= 13 && age < 20:
// //         console.log(firstName + ' is a teenager.');
// //         break;
// //     case age >= 20 && age < 30:
// //         console.log(firstName + ' is a young man.');
// //         break;
// //     default:
// //         console.log(firstName + ' is a man.')
// // }

// // var height;

// // height = 23;
// // if (height || height === 0) {
// //     console.log('Varibale is defined');
// // }
// // else {
// //     console.log('Variable has not been defined');
// // }

// // if (height == '23') {
// //     console.log('The == operator does type coercion');
// // }

// // var johnTeamScore, mikeTeamScore, maryTeamScore;

// // johnTeamScore = 010 + 120 + 103;
// // mikeTeamScore = 100 + 94 + 123;
// // maryTeamScore = 1000 + 134 + 105;

// // var johnTeamAverage, mikeTeamAverage, maryTeamAverage;

// // johnTeamAverage = johnTeamScore / 3;
// // mikeTeamAverage = mikeTeamScore / 3;
// // maryTeamAverage = maryTeamScore / 3;

// // if (johnTeamAverage > mikeTeamAverage && maryTeamAverage) {
// //     console.log('The winner is John\'s team by an average of ' + johnTeamAverage + ' points');
// // } else if (maryTeamAverage > johnTeamAverage && mikeTeamAverage) {
// //     console.log('The winner is Mike\'s team by an average of ' + mikeTeamAverage + ' points');
// // } else {
// //     console.log('The winner is Mary\'s team by an average of ' + maryTeamAverage + ' points');
// // }

// // scoreJohn = (89 + 120 + 103) / 3;
// // scoreMike = (116 + 94 + 123) / 3;
// // scoreMary = (97 + 134 + 105) / 3;

// // console.log(scoreJohn, scoreMike, scoreMary);

// // // if (scoreJohn > scoreMike) {
// // //     console.log('The winner is John\'s team by an average of ' + scoreJohn + ' points');
// // // } else if (scoreMike > scoreJohn) {
// // //     console.log('The winner is Mike\'s team by an average of ' + scoreMike + ' points');
// // // } else {
// // //     console.log('It\'s a draw');
// // // }

// // if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
// //     console.log('The winner is John\'s team by an average of ' + scoreJohn + ' points');
// // } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
// //     console.log('The winner is Mike\'s team by an average of ' + scoreMike + ' points');
// // } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
// //     console.log('The winner is Mary\'s team by an average of ' + scoreMary + ' points');
// // } else {
// //     console.log('There is a draw');
// // }

// function calculateAge(year) {
//     return 2020 - year;
// }
// var ageDavid = calculateAge(1997);

// console.log(ageDavid);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year)
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.')
//     }

// }

// yearsUntilRetirement(1997, 'David');
// yearsUntilRetirement(1950, 'David');

// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + '  teaches how to design';
//         case 'driver':
//             return firstName + ' drives a Sonata in Santo Domingo';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'David'));
// console.log(whatDoYouDo('retired', 'John'));
// console.log(whatDoYouDo('driver', 'Mike'))

// var names = ['David', 'Eu', 'Erick'];
// var years = new Array(1997, 1996, 1996);

// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';

// console.log(names);

// var john = ['John', 'Smith', 1998, 'teacher', false]

// john.push('blue');
// john.unshift('Designer')
// console.log(john);

// john.pop()
// john.pop()
// john.shift()
// john.indexOf(1998)
// console.log(john);
// console.log(john.indexOf(1998))

// function calculateTip(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15
//     } else {
//         percentage = .1
//     }
//     return percentage * bill;
// }
// var bills = [124, 48, 268]
// var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];

// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, finalValues);

// var david = {
//     firstName: "David",
//     lastName: "Rivera",
//     birthYear: 1997,
//     family: ["Maria", "David", "Sheyla"],
//     job: "designer",
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//     }
// };
// david.calcAge();
// console.log(david)

// var david = {
//     name: 'David',
//     mass: 70,
//     height: 1.7,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//     }
// }

// var jose = {
//     name: 'Jose',
//     mass: 70,
//     height: 1.7,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height * this.height);
//     }
// }

// david.calcBMI();
// jose.calcBMI();
// console.log(david, jose);

// if (david.BMI > jose.BMI) {
//     console.log(david.name + ' BMI is higher than ' + jose.name + '\'s BMI.')
// } else if (jose.BMI > david.BMI) {
//     console.log(jose.name + ' BMI is higher than ' + david.name + '\'s BMI.')
// } else {
//     console.log(david.name + ' and ' + jose.name + ' have the same BMI');
// }

// var david = ['David', 'Rivera', 'Designer', 1997, false]

// console.log(david);

// for (var i = 0; i < david.length; i++) {
//     console.log(david[i]);
// }

// var i = 0;
// while (i < david.length) {
//     console.log(david[i])
//     i++;
// }

// var david = ['David', 'Rivera', 'Designer', 1997, false]
// for (var i = 0; i < david.length; i++) {
//     if (typeof david[i] !== 'string') continue;
//     console.log(david[i]);
// }

// var david = ['David', 'Rivera', 'Designer', 1997, false, 'Blue']
// for (var i = 0; i < david.length; i++) {
//     if (typeof david[i] !== 'string') break;
//     console.log(david[i]);
// }

// var david = ['David', 'Rivera', 'Designer', 1997, false, 'Blue']

// for (var i = david.length - 1; i >= 0; i--) {
//     console.log(david[i]);
// }

johnFamily = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips = [];
        this.billTips = [];
        for (i = 0; i < this.bills.length; i++) {
            var percentage;
            var billValue = this.bills[i];
            if (billValue < 50) {
                percentage = .2;
            } else if (billValue >= 50 && billValue < 200) {
                percentage = .15
            } else {
                percentage = .1
            }
            this.tips[i] = percentage * billValue;
            this.billTips[i] = billValue + (percentage * billValue);
        }
    }
}

markFamily = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTip: function () {
        this.tips = [];
        this.billTips = [];
        var percentage;
        for (i = 0; i < this.bills.length; i++) {
            var billValue = this.bills[i];
            if (billValue < 100) {
                percentage = .2;
            } else if (billValue >= 100 && billValue < 300) {
                percentage = .1
            } else {
                percentage = .25
            }
            this.tips[i] = percentage * billValue;
            this.billTips[i] = billValue + (percentage * billValue);
        }
    }
}

johnFamily.calcTip();
markFamily.calcTip();

console.log(johnFamily);
console.log(markFamily);

function averageTip(tip) {
    var tipSum = 0;
    for (i = 0; i < tip.length; i++) {
        tipSum += tip[i];
    }
    return tipSum / tip.length;
}

johnAverageTip = johnFamily.average = averageTip(johnFamily.tips);
markAverageTip = markFamily.average = averageTip(markFamily.tips);

if (johnAverageTip > markAverageTip) {
    console.log('John\'s family gave an average of ' + johnAverageTip + ' making it the highest');
}
else {
    console.log('John\'s family gave an average of ' + markAverageTip + ' making it the highest');
}