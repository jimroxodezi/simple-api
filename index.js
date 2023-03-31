const express = require('express');
const root = require("./routes/root.js");
const userRoutes = require("./routes/user.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", root);
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log("Server listening on port: %s", PORT);
});