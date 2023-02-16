const express = require("express");
const app = express()
console.dir(app)

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('Welcome to the home page!!!')
})

app.get('/r/:subreddit', (req, res) => {
    const { suvreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:postId', (req, res) => {
    const { suvreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search resultes for: ${q}</h1>`)
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})