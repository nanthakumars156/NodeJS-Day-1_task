const express = require("express") ;
const fileSys = require('node:fs');

// express server
const webServer = express();

const PORT=process.env.PORT;
if (!fileSys.existsSync(`${__dirname}/Timestamp`,err=>{
    if(err){
        return err
    }
})){
    fileSys.mkdir(`${__dirname}/Timestamp`,err=>{
        if(err){
            return err
        }
    });
}  


// to create .txt file with content  
webServer.get('/create',(req,res)=>{
    let currentDate = new Date();
    let filename = `${currentDate.toISOString()}.txt`;
    let data="current date and time is "+currentDate.toISOString();
    
    fileSys.writeFile(filename, data);
    res.send("file created");
});
// to get .txt file    
webServer.get("\getfile", (req, res) => {
    let textfiles = fileSys.readdirSync(".\Timestamp");
    console.log(textfiles);
    res.send(textfiles);
});

// Start & Listen the server
webServer.listen(PORT,()=>{
    
    console.log("server running");
    
});
