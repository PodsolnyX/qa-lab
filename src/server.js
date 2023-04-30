const express = require('express');
const bodyParser = require('body-parser');
const findLongestCommonSubsequence = require("./solution");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/main', (req, res) => {
    const { str1, str2 } = req.query;

    if (str1.length === 0 || str2.length === 0) {
        res.statusMessage = "Bad request";
        res.status(400).end();
    }
    if (str1.length > 1000 || str2.length > 1000) {
        res.statusMessage = "Bad request";
        res.status(400).end();
    }
    if (!(/^[a-z]+$/.test(str1) && /^[a-z]+$/.test(str2))) {
        res.statusMessage = "Bad request";
        res.status(400).end();
    }

    const result = findLongestCommonSubsequence(str1, str2);

    res.json({ lcs: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

