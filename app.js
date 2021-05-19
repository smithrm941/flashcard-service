const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const localhost = "127.0.0.1";
const bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/:front/:back', function (req, res) {
    const front = req.params.front;
    const back = req.params.back;
    const flashcard = {}
    flashcard["front"] = front;
    flashcard["back"] = back;
    res.send(flashcard)
});

app.listen(PORT, () => console.log(`Web App running at http://${localhost}:${PORT}/ Press Ctrl-C to terminate`));

module.exports = app;
