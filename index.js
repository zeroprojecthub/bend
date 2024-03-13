require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

const data = [{
    id: 1,
    joke: "This is jokenon1",
    auther: "pankaj desai"
},
{
    id: 2,
    joke: "This is jokenon2",
    auther: "mitali madam"
}, {
    id: 3,
    joke: "This is jokenon3",
    auther: "pratham sir"
}];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("twitter is call");
})

app.get('/api/jokes', (req, res) => {
    res.json(data);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})