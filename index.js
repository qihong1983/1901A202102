const express = require('express');

var bodyParser = require('body-parser');
const app = express ();
// const db = require("./db/index");

const moment = require('moment');


const cors=require('cors')
app.use(cors())

app.use(bodyParser.json())



app.use(express.static(__dirname + '/public'));



app.get('/addinfo',  async (req,res) => {

    // console.log(req);
    // console.log(req.body, 'req.body');

    console.log(req.query, 'req.query');


    res.json({status: true, msg: "success"});
})



app.get('/searchname',  async (req,res) => {
    res.json({status: true, msg: "success"});
})

app.listen(8009, ()=> {
    console.log('启动http服务:8009端口');
});


// electronJS
// webpack 插件
// nodejs 邮件
// 爬虫
// node.js https server 
