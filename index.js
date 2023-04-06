const Promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 1));
const Promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 2));
const Promise3 = new Promise((resolve, reject) => setTimeout(reject, 3000, 3));


Promise.all = null;

Promise.all = (promisesArray) => {
    return new Promise((resolve, reject) => {
        let responses = []
        let errors = []
        promisesArray.forEach( async (promiseFn, index) => {
            try {
                let result = await promiseFn;
                responses.push(result)
                if (index === promisesArray.length - 1){
                    if(errors.length > 0){
                        reject(errors)
                    }else{
                        resolve(responses)
                    }
                }
            } catch (error) {
                errors.push(error);
                reject(errors)
            }
        });
    })
}

Promise.all([Promise1,Promise2,Promise3]).then(response => console.log(response)).catch(err => console.log(err))