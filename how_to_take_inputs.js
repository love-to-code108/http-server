const express = require("express");
const app = express();

app.get("/",(req,res) => {
    const n = req.query.n;
    res.send(req.toString());
    // res.send(n.toString());
})

app.listen("3000");