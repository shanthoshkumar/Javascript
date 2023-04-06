// Polyfill for forEach method
Array.prototype.forEach = null;
if(!Array.prototype.forEach){
    console.log('No support for forEach');
    // polyfill code goes here
    Array.prototype.forEach = function(callbackFn){
        for (let i of this){
            callbackFn(i)
        }
    }
}

[3,5,7,9].forEach(val => console.log(val * 10));

// Polyfill for map method
Array.prototype.map =  null;

if(!Array.prototype.map){
    console.log('No support for map');
    // polyfill code goes here
    Array.prototype.map = function(callbackFn){
        let items = [];
        for(let i=0;i <this.length; i++)
        {
            items.push(callbackFn(this[i]));
        }
        return items;
    }
}

console.log([1,2,3,4,5].map((i) => i * 2))

// Polyfill for filter method
Array.prototype.filter =null;

if(!Array.prototype.filter){
    console.log('No support for filter');
    Array.prototype.filter = function(callbackFn){
        let items = [];
        for (let i =0; i< this.length; i++)
        {
            if(callbackFn(this[i])){
                items.push(this[i]);
            }
        }
        return items;
    }
}
console.log([1,2,3,4,5,6].filter(i => i % 2 != 0));

// Polyfill for reduce method
Array.prototype.reduce = null;
if(!Array.prototype.reduce){
    console.log('No support for reduce');
    Array.prototype.reduce = function(callbackFn, initialValue){
        let accumulator = 0;
        let firstIndex = 0;
    if(arguments.length === 1){
        accumulator = this[0];
        firstIndex = 1;
    }
    else{
        accumulator = initialValue;
        firstIndex = 0;
    }
    for (let i = firstIndex; i<this.length; i ++){
        accumulator = callbackFn(accumulator, this[i]);
    }
    return accumulator;
    }
}
console.log([1,2,3,4,5].reduce((total,num) => total + num))

// Polyfill for find method
Array.prototype.find = null;
if(!Array.prototype.find){
    console.log('No support for find');
    Array.prototype.find = function(callbackFn){
        for(let i of this){
            if(callbackFn(this[i])){
                return this[i];
            }
        }
    }
}

console.log([1,2,3,4,5,6,7,8,9,10].find(item => item > 9))

// Polyfill for Promise.all

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

