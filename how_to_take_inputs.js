const express = require("express");
const app = express();
const port = 5173;

app.get("/",(req,res) => {
    const n = req.query.n;
    console.log(res)
    res.send(req.toString());
    // res.send(n.toString());
})

app.listen(port , () => {
    console.log("The server has been started on the port",port);
});