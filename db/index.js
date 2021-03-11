const mysql = require('mysql');
// const moment = require('moment');

var pool = mysql.createPool({
    connectionLimit: 200,
    password: 'qihong38752673',
    user: 'root',
    database: 'pinyin',
    host: 'localhost',
    port: '3306',
});

let dbObj = {};

dbObj.insertData = (title, content, pinyin) => {


    // pool.query(`INSERT INTO task (type, studentname, url,createAt) VALUES (${type}, '${studentName}', '${filename}','${moment().format("YYYYMMDD")}');`, (err, results) => {

    console.log(`INSERT INTO pinyin (title,content,py) VALUES (${title}, '${content}', '${pinyin}');`);

    return new Promise((resolve, reject) => {
        console.log(11);
        console.log(pool, 'pool');
        pool.getConnection((err, conn) => {
            console.log(22);
            pool.query(`INSERT INTO pinyin (title,content,py) VALUES ('${title}', '${content}', '${pinyin}');`, function (err, results) {
                pool.releaseConnection(conn);
                console.log(err, '<------sql是否执行成功');
                if (err) {
                    return reject(err);
                }

                return resolve(results);
            });
        })
    })
}


// getData
dbObj.getData = (lang, searchname) => {
    return new Promise((resolve,reject) => {
        pool.getConnection((err, conn) => {

            var sql = '';
            if (lang == 'cn') {
                sql = `select * from pinyin where title like '%${searchname}%'`;
            } else {
                sql = `select * from pinyin where py like '%${searchname}%'`
            }

            console.log(sql, '<----sql');


            pool.query(sql, (err, results) => {
                pool.releaseConnection(conn);

                if (err) {
                    reject(err);
                }

                return resolve(results);
            });
        })
    })
}

module.exports = dbObj;