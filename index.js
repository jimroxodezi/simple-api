// const express = require('express');
import express from "express";
// const cors = require('cors');
import cors from "cors";
// const routes = require('./routes');
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.use("/users", routes.user);
app.use("/messages", routes.message);
app.use("/session", routes.session);


app.listen(PORT, () => {
    console.log("Server listening on port: %s", PORT);
});