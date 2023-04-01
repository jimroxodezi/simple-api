// importing packages
// const express = require('express');
import express from "express";
// const { v4 } = require('uuid');
import { v4 } from "uuid"; 
// const { messages } = require("../models");
import { messages } from "../models/index.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(Object.values(messages));
});
  
router.get('/:messageId', (req, res) => {
    res.json(messages[req.params.messageId]);
});

router.post('/', (req, res) => {
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

router.delete('/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = messages;
  
    messages = otherMessages;
  
    return res.send(message);
});

export default router;