// let apiFailed = true;
// const query = new Promise((resolve, reject )=> {
//     if(apiFailed){
//         reject({'message': 'Internal server error', 'code': 500})
//     }else {
//         resolve('Fetched successfully!')
//     }
// });

// query.then((message)=> console.log(message)).catch((error) => console.log(error.message + ' exited with code ' + error.code))

// function executeQueryWithCallback(successCallback, errorCallback){
// if(apiFailed){
//     errorCallback({'message': 'Internal server error', 'code': 500})
// }else{
//     successCallback('Fetched successfully!')
// }
// }

// executeQueryWithCallback((message)=>{ console.log(message)}, (error)=>{console.log(error.message + ' exited with code ' + error.code)})

// function executeQueryWithPromise(){
//     return new Promise((resolve, reject) => {
//         if(apiFailed){
//             reject({'message': 'Internal server error', 'code': 500})
//         }
//         else{
//             resolve('Fetched successfully!')
//         }
//     })
// }
// executeQueryWithPromise().then((message)=>{ console.log(message)}).catch((error)=>{console.log(error.message + ' exited with code ' + error.code)})


const recording1 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 1000,'Recording 1 success')
    reject('Recording 1')
})

const recording2 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 500,'Recording 2 success')
    resolve('Recording 2')
})

const recording3 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 100,'Recording 3 success')
    reject('Recording 3')
})

// Promise.all([recording1,recording2,recording3]).then((message) => console.log(message)).catch(()=>console.log('Promise All failed'))
Promise.race([recording1,recording2,recording3]).then((message) => console.log(message)).catch(()=>console.log('Promise race failed'))
