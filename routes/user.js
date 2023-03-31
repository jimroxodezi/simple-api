const router = require('express').Router();

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

// app.put('/users/:userId', (req, res) => {
//     return res.send(
//       `PUT HTTP method on user/${req.params.userId} resource`,
//     );
// });
  
// app.delete('/users/:userId', (req, res) => {
//     return res.send(
//       `DELETE HTTP method on user/${req.params.userId} resource`,
//     );
// });

export default router;