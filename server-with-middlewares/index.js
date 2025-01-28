const express = require('express') 
const PORT = 8000;



const app = express();

// Middleware to log the use-agent of incoming request.
app.use((req,res,next)=>{
    console.log(`User-Agent : ${req.headers["user-agent"]}`);
    
})

app.get("/",(req,res)=>{
    res.send("Welcome to the root")
})


app.listen(PORT,()=>{
    console.log(`Listening on port : ${PORT}`);
    
})