const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("asdasdsad")
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})




// Cording Excercise: 62 Input Event Practice

// const usernameInput = document.querySelector('#username');
// const h1 = document.querySelector('h1');

// usernameInput.addEventListener('input', function () {
//     const username = usernameInput.value;
//     h1.innerText = `Welcome, ${username}`;
//     if (username.length === 0) {
//         h1.innerText = 'Enter Your Username';
//     }
// })