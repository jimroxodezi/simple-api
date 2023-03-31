const express = require('express');
const { v4 } = require('uuid');
const cors = require('cors')

let users = {
    1: {
      id: v4(),
      username: 'Robin Wieruch',
    },
    2: {
      id: v4(),
      username: 'Dave Davids',
    },
};
  
let messages = {
    1: {
      id: v4(),
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: v4(),
      text: 'By World',
      userId: '2',
    },
};

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get("/users", (req, res) => {
	// console.log("get request to users");
	res.status(200).json(Object.values(users));
});

app.get("/users/:userID/", (req, res) => {
    res.status(200).json(users[req.params.userID]);
})

app.post("/users", (req, res) => {
	// console.log("post request to users");
	res.status(200).json({msg: `It's a POST request.\n`});
});

app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method on user/${req.params.userId} resource`,
    );
});
  
app.delete('/users/:userId', (req, res) => {
    return res.send(
      `DELETE HTTP method on user/${req.params.userId} resource`,
    );
});


app.get('/messages', (req, res) => {
    res.json(Object.values(messages));
});
  
app.get('/messages/:messageId', (req, res) => {
    res.json(messages[req.params.messageId]);
});

app.post('/messages', (req, res) => {
    const id = v4();
    const message = {
      id,
      text: req.body.text,
    };
    
    // add to our message object
    messages[id] = message;
    // send created message to our user.
    res.status(200).send(message);
});

app.listen(PORT, () => {
    console.log("Server listening on port: %s", PORT);
});