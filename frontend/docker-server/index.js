const express = require("express");
const app = express();
app.get("/docker", (req, res, next) => {
    res.send("hello, welcome to docker web server for vue app.");
});
app.listen(3900);