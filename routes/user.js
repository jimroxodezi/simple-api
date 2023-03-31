const { users } = require("../models");

const router = require('express').Router();

router.get("/users", (req, res) => {
	// console.log("get request to users");
	res.status(200).json(Object.values(users));
});

router.get("/users/:userID/", (req, res) => {
    res.status(200).json(users[req.params.userID]);
})

router.post("/users", (req, res) => {
	// console.log("post request to users");
	res.status(200).json({msg: `It's a POST request.\n`});
});

// router.put('/users/:userId', (req, res) => {
//     return res.send(
//       `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });
  
// router.delete('/users/:userId', (req, res) => {
//     return res.send(
//       `DELETE HTTP method on user/${req.params.userId} resource`,
//     );
// });

// export default router;
module.exports = router;