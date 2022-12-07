var express = require("express");
var app = express();
var mysql = require("mysql");
app.use(express.json());
var cors = require("cors");
app.use(cors());
// const otpGenerator = require("otp-generator");
// var nodemailer = require("nodemailer");
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

app.post('/Unitsold',(req,res) => {
    // let id=req.body.id;
    // let sql="SELECT lm.txtLotteryname ,lm.dtLotterydrawdate as DrawDate, count(ut.id) as units  FROM tblunit ut JOIN tbllotterymaster lm ON ut.refLotterymaster = lm.id WHERE lm.id ='"+ id + "'";
    let sql="SELECT lm.txtLotteryname AS Lotterymaster, lm.dtLotterydrawdate as DrawDate,COUNT(ut.id)  AS Unitsold FROM tbllotterymaster lm JOIN tblunit ut ON ut.refLotterymaster = lm.id GROUP BY lm.txtLotteryname HAVING Unitsold > 1";
  
    con.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
  })
  })
  
  app.listen(8080, (err) => {
    if (err) throw err;
    console.log("Server running in port 8080");
  });
  