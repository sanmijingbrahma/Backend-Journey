const express = require("express");
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
    res.send("Welcome to my Simple Server....");
})



app.listen(PORT,()=>{
    console.log(`Server is runnning on http://localhost${PORT}`);
    
})

