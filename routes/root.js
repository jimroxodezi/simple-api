// importing packages
const express = require('express');
const router = express.Router();


router.get(`/`, function (req, res) {
	res.status(200).json({msg: `It's a GET request.\r`});
});

router.post(`/`, function (req, res) {
	res.status(200).json({msg: `It's a POST request.\n`});
});

router.put(`/`, function (req, res) {
	res.status(200).json({msg: `It's a PUT request.\n`});
});

router.delete(`/`, function (req, res) {
	res.status(200).json({msg: `It's a DELETE request.\n`});
});


module.exports = router;