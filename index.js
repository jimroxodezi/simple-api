import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import messageRoutes from "./routes/message.js";
// import sessionRoutes from "./routes/session.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
// app.use("/session", sessionRoutes);


app.listen(PORT, () => {
    console.log("Server listening on port: %s", PORT);
});