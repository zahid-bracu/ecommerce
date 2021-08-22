const express = require('express')
const fs=require('fs');
const app = express()
const port = 3100;

app.get('/', (req, res) => {
  res.send({name:"zahid"})
})


app.get('/data',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})