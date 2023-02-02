const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', function () {
        h1.style.backgroundColor = makeRandColor();
        h1.style.color = makeRandColor();
    })
}


// function changeTextColor() {
  
//     // 1. 대상 element 선택
//     const element = document.getElementById('greeting');
    
//     // 2. style 변경
//     element.style.color = 'blue';
//   }