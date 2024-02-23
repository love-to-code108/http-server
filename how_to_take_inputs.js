const express = require("express");
const app = express();
const port = 5173;

app.get("/",(req,res) => {
    const n = req.query.n;
    console.log(req.header);
    // res.send(req.toString());
    res.send("Hello world");
})

app.listen(port , () => {
    console.log("The server has been started on the port",port);
});