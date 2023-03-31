// importing packages
const express = require('express');
const { v4 } = require('uuid');
const router = express.Router();
const { messages } = require("../models");

router.get('/messages', (req, res) => {
    res.json(Object.values(messages));
});
  
router.get('/messages/:messageId', (req, res) => {
    res.json(messages[req.params.messageId]);
});

router.post('/messages', (req, res) => {
    const id = v4();
    const message = {
      id,
      text: req.body.text,
      userId: req.me.id
    };
    
    // add to our message object
    messages[id] = message;
    // send created message to our user.
    res.status(200).send(message);
});

router.delete('/messages/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = messages;
  
    messages = otherMessages;
  
    return res.send(message);
});

module.exports = router;