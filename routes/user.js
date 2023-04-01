// const { users } = require("../models");
import { users } from '../models/index.js';

// const router = require('express').Router();
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	// console.log("get request to users");
	res.status(200).json(Object.values(users));
});

router.get("/:userID/", (req, res) => {
    res.status(200).json(users[req.params.userID]);
})

router.post("/", (req, res) => {
	// console.log("post request to users");
	res.status(200).json({msg: `It's a POST request.\n`});
});

// router.put('/:userId', (req, res) => {
//     return res.send(
//       `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });
  
// router.delete('/:userId', (req, res) => {
//     return res.send(
//       `DELETE HTTP method on user/${req.params.userId} resource`,
//     );
// });

export default router;
// module.exports = router;