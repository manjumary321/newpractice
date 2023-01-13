// without promises

//eg 1
// function getCurrentTime() {
//     // Get the current 'global' time from an API
//     return setTimeout(function() {
//       return new Date();
//     }, 2000);
//   }
//   var currentTime = getCurrentTime()
//   console.log('The current time is: ' + currentTime);

//-----------

//eg 2

// function getCurrentTime(callback) {
//     // Get the current 'global' time from an API
//     return setTimeout(function() {
//       var currentTime = new Date();
//       callback(currentTime);
//     }, 2000);
//   }
//   getCurrentTime(function(currentTime) {
//     console.log('The current time is: ' + currentTime);
//   });

//-------

//eg 3

// function getCurrentTime(onSuccess, onFail) {
//     // Get the current 'global' time from an API
//     return setTimeout(function() {
//       // randomly decide if the date is retrieved or not
//       var didSucceed = Math.random() >= 0.5;
//       if (didSucceed) {
//         var currentTime = new Date();
//         onSuccess(currentTime);
//       } else {
//         onFail('Unknown error');
//       }
//     }, 2000);
//   }
//   getCurrentTime(function(currentTime) {
//     console.log('The current time is: ' + currentTime);
//   }, function(error) {
//     console.log('There was an error fetching the time');
//   });


//------

//eg 4


// function getCurrentTime(onSuccess, onFail) {
//     // Get the current 'global' time from an API
//     return setTimeout(function() {
//       // randomly decide if the date is retrieved or not
//       var didSucceed = Math.random() >= 0.5;
//       console.log(didSucceed);
//       if (didSucceed) {
//         var currentTime = new Date();
//         onSuccess(currentTime);
//       } else {
//         onFail('Unknown error');
//       }
//     }, 2000);
//   }
//   getCurrentTime(function(currentTime) {
//     getCurrentTime(function(newCurrentTime) {
//       console.log('The real current time is: ' + currentTime);
//     }, function(nestedError) {
//       console.log('There was an error fetching the second time');
//     })
//   }, function(error) {
//     console.log('There was an error fetching the time');
//   });

//----

//========================================================================

//promises

//eg 5

// function getCurrentTime() {
//     // Get the current 'global' time from an API using Promise
//     return new Promise((resolve, reject) => {
//       setTimeout(function() {
//         var didSucceed = Math.random() >= 0.5;
//         didSucceed ? resolve(new Date()) : reject('Error');
//       }, 2000);
//     })
//   }
//   getCurrentTime()
//     .then(currentTime => getCurrentTime())
//     .then(currentTime => {
//       console.log('The current time is: ' + currentTime);
//       return true;
//     })
//     .catch(err => console.log('There was an error:' + err))

                       //or

// function getCurrentTime() {
//     // Get the current 'global' time from an API using Promise
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             var didSucceed = Math.random() >= 0.5;
//             didSucceed ? resolve(new Date()) : reject('Error');
//         }, 2000);
//     })
// }
// getCurrentTime()
//     .then(currentTime => getCurrentTime(currentTime))
//     .then(currentTime => {
//         console.log('The current time is: ' + currentTime);
//         return true;
//     })
//     .catch(err => console.log('There was an error:' + err))                        


//=====================================================================

//Creating a promise

//eg  6

// var promise = new Promise(function(resolve, reject) {
//   // call resolve if the method succeeds
//   resolve(true);
// })
// promise.then(bool => console.log('Bool is true'))


//================================================================

