const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();  //입력을 해도 주소 안 바뀌게 해주는 역할

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';  //입력하고 빈 칸으로 바꿔주는 역할
    tweetInput.value = '';  //입력하고 빈 칸으로 바꿔주는 역할
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

// Cording Exercise 61 : Form Events Exercise

// const form = document.querySelector('form');
// const list = document.querySelector('#list');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const productInput = form.elements.product;
//     const qtyInput = form.elements.qty;
//     addItem(productInput.value, qtyInput.value);
//     productInput.value = '';
//     qtyInput.value = '';
// })

// const addItem = function(productInput, qtyInput) {
//     const newItem = document.createElement('li');
//     list.appendChild(newItem);
//     newItem.innerText = `${qtyInput} ${productInput}`;
// }

