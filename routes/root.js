// importing packages
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
	console.log("get request to users");
	res.status(200).json({msg: `It's a GET request.\r`});
});

router.post("/users", (req, res) => {
	console.log("post request to users");
	res.status(200).json({msg: `It's a POST request.\n`});
});

router.put("/users", (req, res) => {
	res.status(200).json({msg: `It's a PUT request.\n`});
});

router.delete("/users", (req, res) => {
	res.status(200).json({msg: `It's a DELETE request.\n`});
});


module.exports = router;