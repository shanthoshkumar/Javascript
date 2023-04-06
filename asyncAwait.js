function makeRequest(location){
    console.log(`Making request to ${location}`)
    return new Promise((resolve, reject) => {
        if(location === 'Google'){
            resolve('Google says Hi')
        }else{
            reject('Only request to Google is permitted')
        }
    })
}

function processResponse(response){
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Processed Response => ${response}`)
    })
}

// executing with promise
// Also an example for PROMISE CHAINING
makeRequest('Bing').then((response) => { 
    return processResponse(response)
}).then((result) => {console.log(result)}).catch((err) => console.log(err))

// Replacing with async await


 async function doRequest(){
    try{
        const response = await makeRequest('Bing');
        const result = await processResponse(response);
        console.log(result);

    }
    catch(err){
        console.log(err);
    }
}
doRequest();