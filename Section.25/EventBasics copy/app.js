const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    Element.style.color = "red";
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor() {
    const h1 = document.getElementById('h1');

    element.style.color = 'blue'
}



// function changeTextColor() {
  
//     // 1. 대상 element 선택
//     const element = document.getElementById('greeting');
    
//     // 2. style 변경
//     element.style.color = 'blue';
//   }