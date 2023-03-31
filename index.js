const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

// custom middleware
app.use((req, res, next) => {
    // console.log(Date.now());
    req.me = users[1]
    next();
});


app.listen(PORT, () => {
    console.log("Server listening on port: %s", PORT);
});