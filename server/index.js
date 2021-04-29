const express = require("express");
const app = express();
app.get("/docker", (req, res, next) => {
    res.send("Hello, welcome to docker web server for vue app.");
});
app.listen(3000);