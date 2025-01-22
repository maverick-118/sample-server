const express = require('express')
const app = express()

app.get('/hi-railway',(req,res)=>
{
    res.send("Sent Hi from railway....")
})

app.listen(4000,()=>
{
    console.log('Server running at port 4000 at http://localhost:4000')
})