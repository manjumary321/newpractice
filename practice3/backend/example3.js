//==========================

var promise = new Promise( (resolve, reject) => {

    let a = 2;

    if (a !== 0) {
       resolve("Promise resolved successfully");
    }
    else {
       reject(Error("Promise rejected"));
    }
 });

 promise.then(function(result) {
    console.log(result); // "Promise resolved successfully"
 },
  err => {
    console.log(result); // Error: "Promise rejected"
 });

