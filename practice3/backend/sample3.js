// var some_function = function (username, password) {
//   return new Promise(function (resolve, reject) {

//     /* stuff using username, password */

//     if (/* everything turned out fine */) {
//       resolve("Stuff worked!");
//     } else {
//       reject(Error("It broke"));
//     }
//   });
// };


//------------------------

// eg 2

// var promise1 = new Promise(function(resolve, reject) {
//     resolve('Success!');
//   });
//   var extraData = 'ImExtraData';
//   promise1.then(function(value) {
//     console.log(value, extraData);
//     // expected output: "Success!" "ImExtraData"
//   }, extraData);


//=============================

// eg 2


// const addNumbers = (a, b) => {
    
//     return new Promise((resolve, reject) => {
      
//       setTimeout(() => {
//         resolve(a + b);
//       }, 3000);
    
//     });
    
    
//   };
  
//   let getResult = async (a, b) => {
//       let value = await addNumbers(a, b);
//       console.log(value);
//   };
  
//   getResult(1, 3);


//------------------------


//eg 3    

// function logUser(username, password){
//   return new Promise((resolve, reject) => {
//       let response = 'user logged in'
//       resolve(response)
//   })
// }

// function showMessage(msg){
//   console.log(msg)
// }

// logUser('user', 'pass').then((respFromLogUser) => {
//   showMessage(respFromLogUser)
// })

//====

// eg4

let verifyEmail = (email) => new Promise((resolve, rejected) => {
  let rsp = {isRepeated:false}
  let sql = `select id from users where email='${email}' `
  try{
      db.query(sql, (err,result)=>{
          if(!err){
              if(result.length > 0){
                  rsp = {isRepeated:true}
              }
          }
      })
      resolve(rsp)
  }catch(e){
      rejected({ok:false,err:e})
  }
})