const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'))

app.use(express.static(__dirname + "public/css"));
app.use( express.static(__dirname + "public/jquery"));
app.use( express.static(__dirname + "public/img"));
app.use( express.static(__dirname + "public/videos"));



app.post('/redirect',(req,res) =>{
    res.redirect(req.get('referer'));
});

// Index.html szolgáltatása
app.get('/', (req, res) => {
    res.sendFile( __dirname + '/main.html');

});


app.get('/main.html', (req, res) => {
    res.sendFile( __dirname + '/main.html');

});

app.get('/rpi400.html', (req, res) => {
    res.sendFile( __dirname + '/rpi400.html');

});


app.get('/rpi5.html', (req, res) => {
    res.sendFile( __dirname + '/rpi5.html');

});

app.get('/rpipico.html', (req, res) => {
    res.sendFile( __dirname + '/rpipico.html');

});

app.get('/rpizero.html', (req, res) => {
    res.sendFile( __dirname + '/rpizero.html');

});

app.get('/references.html', (req, res) => {
    res.sendFile( __dirname + '/references.html');

});






const jsonFile = path.join(__dirname, 'public/jquery/users2.json');

// JSON fájl kiszolgálása
app.get('/data', (req, res) => {
    res.sendFile(jsonFile);
});

// Webszerver indítása

app.listen(3000, () => {
    console.log(`A webszerver fut: http://localhost:${3000}`);
});