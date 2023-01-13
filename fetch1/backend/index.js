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


app.post('/Lotteryprovdresultfetch',(req,res) => {
  // let id=req.body.id;
  let sql="Select pr.txtProvidername as Providername, lm.txtLotteryname as Lotteryname, date_format(lm.dtLotterydrawdate,' %Y - %m - %d ') as DrawDate from tblprovider pr  LEFT JOIN tbllotterymaster lm   ON lm.refProvider =  pr.id  ";

con.query(sql, (err, result) => {
 if(err) throw err;
 console.log(result);
 res.send(result);
})
});

app.post('/ResultNumberInsert',(req,res) => {
  let first=req.body.first;
  let sql="insert into tblresultmaster (txtFirstchoicenumber) values('"+first+"')";

con.query(sql, (err, result) => {
 if(err) throw err;
 console.log(result);
 res.send(result);
})
});

app.post('/RaffleIdInsert',(req,res) => {
  // let id=req.body.id;
  let raffleId=req.body.raffleId;
  let sql="insert into tbllotterymaster (txtRaffleid) values ('"+raffleId+"')";

con.query(sql, (err, result) => {
 if(err) throw err;
 console.log(result);
 res.send(result);
})
});




app.listen(8080, (err) => {
  if (err) throw err;
  console.log("Server running in port 8080");
});
