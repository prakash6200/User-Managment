const express = require("express");
const cors = require("cors");
const config = require("./config/config");
require("./config/db.config");
const router = require("./router");
const PORT = process.env.PORT || config.PORT
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", router);

app.use(function (req, res) {
    res.type("text/plain");
    res.status(404);
    res.send({ success: false, message: "404 Not Found" });
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
