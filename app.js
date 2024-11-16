const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const authRouter = require("./routes/auth-routes");

app.use("/auth", authRouter);

app.use((req, res) => {
    res.status(400).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
