const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const localhost = "127.0.0.1";
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/:front/:back', function (req, res) {
    // whatever is typed in URI as "front" or "back" is encoded so spaces
    // and punctuation can be used
    const front = encodeURI(req.params.front);
    const back = encodeURI(req.params.back);
    const flashcard = {}
    // "front" and "back" are decoded for returned object
    flashcard["front"] = decodeURI(front);
    flashcard["back"] = decodeURI(back);
    res.send(flashcard)
});

app.listen(PORT, () => console.log(`Web App running at http://${localhost}:${PORT}/ Press Ctrl-C to terminate`));

module.exports = app;
