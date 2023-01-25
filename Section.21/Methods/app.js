const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;






// Coding Exercise 45 : Methods Exercise

// const square = {
//     side: 10,
//     area(num) {
//         return num * num;
//     },
//     perimeter(num) {
//         return num * 4;
//     }
// }