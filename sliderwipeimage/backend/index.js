
var express = require("express");
var app = express();
var mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "lotterydrums",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});

app.get("/LatestDrawResult", (req, res) => {
    let sql = "select txtLotteryname as LotteryName, txtFirstprize as PrizeMoney, txtLotteryresult as LotteryResult, DATE_FORMAT(dtLotterydrawdate,'%y-%m-%d') as Date from tbllotterymaster where dtLotterydrawdate < curdate() order by dtLotterydrawdate desc limit 1";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get("/LatestLottery", (req, res) => {
    let sql = "SELECT  DATE_FORMAT(dtLotterydrawdate,'%y-%m-%d') as Date, txtFirstprize as PrizeMoney FROM tbllotterymaster where dtLotterydrawdate > curdate() order by dtLotterydrawdate asc limit 1";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

app.get("/TicketAnnouncent", (req, res) => {
    let sql = "SELECT max(DATE_FORMAT(dtLotterydrawdate,'%y-%m-%d')) as Date, txtLotteryname as LotteryName FROM tbllotterymaster;";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})
app.listen(8080, () => {
    console.log("listening on port");
});