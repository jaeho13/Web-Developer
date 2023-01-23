// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()


// Coding Exercise 35 : Heart Function Exercise

// function printHeart() {
//     console.log('<3');
// }
// console.log('<3');


// Coding Exercise 36 : Rant Exercise

// function rant(message) {
//     console.log(message.toUpperCase(message))
//     console.log(message.toUpperCase(message))
//     console.log(message.toUpperCase(message))
// }

// Coding Exercise 37 : Multiple Args Exercise

// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!")
//     }
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// isSnakeEyes(dice, dice);


// Coding Exercise 38 : Return Value Practice

// function multiply(x, y) {
//     return x * y;
// }


// Coding Exercise 39 : isShortsWeather Function

// function isShortsWeather(temperature) {
//     if (typeof temperature === 'number' && temperature >= 75) {
//     return true;
//     } else if (temperature < 75) {
//         return false;
//     }
// }


// Coding Exercise 40 : Last Element Exercise

// function lastElement(arr) {
//     if (arr.length === 0) {
//         return null;
//     } else {
//         return arr[arr.length - 1];
//     }
// }