const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const bodyParser = require('body-parser')

app.get('/',(req,res)=>{
    res.send('hello world !!');
})

//listening to the port:5000

app.listen(port,()=>{
    console.log('server is runnning in the port',port);
})

//access for all the static files

app.use(express.static('public'))

// Create application/x-www-form-urlencoded parser  

var urlencodedParser = bodyParser.urlencoded({extended:false});

//get data from react app (node app)

app.post('/process_post',urlencodedParser,(req,res)=>{
    //prepare output in json format
    var response = {
        username:req.body.user,
        password:req.body.pass,
    };
    console.log(response)
})

