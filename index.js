const express = require("express");
const app = express();
app.get('', (req, res)=>{
    res.send("This is  simple html page.");
    }
 );

 app.listen(4000);