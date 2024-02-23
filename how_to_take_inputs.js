const express = require("express");
const app = express();
const port = 5173;
const user = [{
    name:"Biswanath",
    kidney:[
        {
            statusOfKidney:true
        },
        {
            statusOfKidney:false
        }
    ]
}]

// I DONT KNOW WHATS HAPPENING BUT BASICALLY "express.json()" ALLOWS YOU TO ACESS THE BODY OF THE "req" ELEMENT
app.use(express.json())


app.get("/",(req,res) => {
    const n = req.query.n;
    console.log(req.header);
    // res.send(req.toString());
    res.send("Hello world");
})

// THE POST REQUEST
app.post("/" , (req,res) => {
    const a = req.body.a
    res.send(a.toString());
})

app.listen(port , () => {
    console.log("The server has been started on the port",port);
});