const express = require('express');

var bodyParser = require('body-parser');
const app = express ();
// const db = require("./db/index");

const moment = require('moment');
const db = require("./db/index");

const cors=require('cors')
app.use(cors())

app.use(bodyParser.json())



app.use(express.static(__dirname + '/public'));


//填加
app.get('/addinfo',  async (req,res) => {

    // console.log(req);
    // console.log(req.body, 'req.body');

    console.log(req.query, 'req.query');


//     title: 小洪
// content: 小洪
// pinyin: xiaohong
    const {title, content, pinyin} = req.query;

    let results =  await db.insertData(title, content, pinyin);

    console.log(results, '<----results');


    res.json({status: true, msg: "success"});
})



app.get('/searchname',  async (req,res) => {


    // lang: lang,
    // searchName: e.target.value


    let {lang, searchName} = req.query;

    let results =  await db.getData(lang, searchName);

    console.log(results, '<-----results');
    
    

    res.json({
        status: true, 
        msg: "success",
        data: results
    });

    
})

app.get('/clearData',  async (req,res) => {

    let results =  await db.clearData();

    
    console.log(results, "<--results clearData");


    res.json({
        status: true,
        msg: "success"
    })
});

app.listen(8009, ()=> {
    console.log('启动http服务:8009端口');
});


// electronJS
// webpack 插件
// nodejs 邮件
// 爬虫
// node.js https server 
