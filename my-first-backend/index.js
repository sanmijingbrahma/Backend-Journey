const { log } = require("console");
const http = require("http");
const url = require("url")


// logger middleware
const logger = (req,res,next)=>{
    console.log(`Requrested Method ${req.method}, Request URL: ${req.url}`);
    next();
    
}




const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain","X-Custom-Header":"Learning Backend"});
    const parsedURL = url.parse(req.url, true);
    const pathname = parsedURL.pathname;
    const query = parsedURL.query;
        
    if(pathname === "/"){
        res.end("Welcome to the Home page");
    }else if(pathname == "/about"){
        res.end("This is the about page");
    }else if(pathname == "/contact"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({"email":"cont@mai.com","phone":"1245"}));
    }else if(pathname === "/search"){
        const SearchQuery = query.query || "No Query is provided!";
        res.end(`Your Searched for ${SearchQuery}`);

    }else if(pathname === "/greet"){
        const name = query.query || "Hello, Stranger!";
        res.end(`Hello, ${name}`);
    }else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("404 : Page not Found!");
    }


});


server.listen(3000,()=>{
    console.log(`Server is running on http://localhost:3000`);
    
})