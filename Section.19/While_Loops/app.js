// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo"

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")


// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")


// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }


let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}




// while 과 for 문의 차이
// while문은 반복의 횟수를 정하지 않아도 되기에 비밀번호 맞추기 등에 유리하다