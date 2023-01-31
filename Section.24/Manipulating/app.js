const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}





// Cording Exercise 53 : Pickles Exercise

// document.querySelector('h1 > span').innerText = 'Disgusting';



// Cording Exercise 54 : Manipulating Attributes Practice

// const img = document.querySelector('img');
// img.src = "https://devsprouthosting.com/images/chicken.jpg";
// // img.setAttrivut('src', "https://devsprouthosting.com/images/chicken.jpg")
// img.setAttribute('alt', 'chicken');
// // img.alt = 'chicken';


// Cording Exercise 55 : Magical Forest Circle Exercise

// const container = document.querySelector('#container');
// const img = document.querySelector('img');

// container.style.textAlign = 'center';
// img.style.width = '150px';
// img.style.borderRadius = '50%';


// Cording Exercise 56 : Rainbow Text Exercise

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// const singleLetters = document.querySelectorAll('span');
// let color = 0;
// for (let singleLetter of singleLetters) {
//     singleLetter.style.color = colors[color];
//     color++;
// }


// Cording Exercise 57 : ClassList Practice

// const list = document.querySelectorAll('li');

// for (let list of list) {
//     list.classList.toggle('highlight');
// }


// Cording Exercise 58 : 100 Button Insanity Exercise

// const container = document.querySelector('#container');
// for (let i = 0; i < 100; i++) {
//     const btn = document.createElement('button');
//     btn.innerHTML = "Hey!";
//     container.appendChild(btn);
// }