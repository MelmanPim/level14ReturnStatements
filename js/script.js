let overHundred = function (number) {

    if (number > 100) {
        return ('true');
    }

    return ('false');
};


let result = overHundred(101);
console.log(result);

// This is a function that does something.

let bouncer = function () {
    if (age < 18) {
        return ('this is a club for adults');
    }

    else if (currentNumber >= maxNumber) {
        return ('it is too busy now, come back later');
    }

    else {
        return ('come in');
    }

};

let maxNumber = (80);
let currentNumber = (79);
let age = (18);

let answer = bouncer();
console.log(answer);



const calculateAverage = function () {
    return ((agePerson1 + agePerson2 + agePerson3 + agePerson4 + agePerson5) / 5)
};

const agePerson1 = 23;
const agePerson2 = 34;
const agePerson3 = 83;
const agePerson4 = 28;
const agePerson5 = 65;

let gemiddelde = calculateAverage();
console.log(Math.round(gemiddelde));
