const express = require('express') 
const PORT = 8080;



const app = express();

// Middleware to log the use-agent of incoming request.
app.use((req,res,next)=>{
    console.log(`User-Agent : ${req.headers["user-agent"]}`);
    next();
    
})

app.use("/between",(req,res,next)=>{

    const time = new Date();
    let hour = time.getHours();
    if(hour >=9 && hour<=17){
        next();
    } else{
        res.status(401).send("You are not allowed at the moment")
    
    }
    
    
})

app.get("/",(req,res)=>{
    res.send("Welcome to the root")
})


app.get("/between",(req,res)=>{
    res.send("Wow, You are at correct time to access this website")
})


app.listen(PORT,()=>{
    console.log(`Listening on port : ${PORT}`);
    
})