const express = require("express");

const app = express();

// http://localhost:4000/cheer-friends
app.get("/cheer-friends", function (req, res) {
    res.send("Hello World");
});

app.listen(4000);
