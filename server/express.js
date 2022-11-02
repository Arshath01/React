const express = require('express') ;
const port = 5000 ;
const path = require ('path') ;
const cors = require ('cors') ;
const app = express () ;



app.get ('/', (req,res) => {
    var filePath = { root : path.join (__dirname + '/public')} ;
    res.sendFile ('home.html',filePath) ;
}).listen (port, () => { console.log('server is running in the port', port)} ) ;

app.use(express.static('public'))

app.post("/process",(req,res) => {
    res.redirect('/index.html')
})