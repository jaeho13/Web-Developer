// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }

const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.appen(bTag);
    newTweet.appen(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
}) //클릭 시 LI 만 사라짐


// tweetsContainer.addEventListener('click', function (e) {
//     e.target.remove();
// })  //새로운 내용을 추가해도 지우는 기능 클리하면 다 지워짐