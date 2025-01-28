const express = require('express') 
const PORT = 8080;

let TotalRequest = 0;

const app = express();

// Middleware to log the use-agent of incoming request.
app.use((req,res,next)=>{
    console.log(`User-Agent : ${req.headers["user-agent"]}`);
    next();
    
})

// Middleware to log the number of requrest to the server.
app.use((req,res,next)=>{
    // increment the counter
    TotalRequest++;
    console.log(`Total Request to the Server : ${TotalRequest}`);
    next();
})

// Middelware to make a route accessable to a specifi time
app.use("/between",(req,res,next)=>{

    const time = new Date();
    let hour = time.getHours();
    if(hour >=9 && hour<=17){
        next();
    } else{
        res.status(401).send("You are not allowed at the moment")
    
    }
})

// Log the requesst
app. use((req,res,next)=>{
    console.log(`Method :${req.method}, URL : ${req.url}`);
    next();
    
})

app.use((err,req,res,next)=>{
    console.log(err);
    next();
})

// Home route
app.get("/",(req,res)=>{
    res.send("Welcome to the root")
})

app.get("/error",(req,res,next)=>{
    const error = new Error("Oh ohThis is an error!")
    error.status = 404;
    next(error);
})

app.get("/time",(req,res)=>{
    const time = new Date().toISOString();
    res.send(time);
})

app.get("/status",(req,res)=>{
    res.send("Great!")
})

app.get("/echo",(req,res)=>{
    const data = req.body;
    res.send(data);
})

app.get("/between",(req,res)=>{
    res.send("Wow, You are at correct time to access this website")
})


app.listen(PORT,()=>{
    console.log(`Listening on port : ${PORT}`);
    
})