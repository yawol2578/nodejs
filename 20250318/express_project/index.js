const expr = require('express') 
const app = expr()
const PORT = 3000

app.listen(PORT, () =>{
    console.log(`서버가 http://localhost:${PORT}에서 실행중임`)
})

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/tik', (req, res) => {
   res.send('tak');
});

app.get('/qwer', (req, res) => {
    res.send('asdf');
 });