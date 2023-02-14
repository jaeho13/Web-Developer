// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
// } else {
//     console.log("YOUR NUMBER IS GRETER (OR EQUL) THAN 0.5!!! ")
// }
// console.log(random);


// const dayOfweek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfweek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (dayOfweek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (dayOfweek === 'firday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!!")
// } else {
//     console.log("MEH")
// }



// 0-5 - FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

// const age = 8;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }


const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}




