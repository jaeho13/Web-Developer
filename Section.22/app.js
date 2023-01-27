const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

// const double = numbers.map(function (num) {
//     return num * 2;
// })


const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
]



movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

// const title = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })


// Cording Exercise 47 :  Map Practice

// const firstNames = fullNames.map(function(fullNames) {
//   return fullNames.first;
// })

// const add = (x, y) => {
//     return x + y;
// }

// const square = num => {
//     return num * num;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6 ) + 1 
// }

// Cording Exercise 48 : Arrow Function Exercise

// const greet = name => {
//     return `Hey ${name}!`
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b