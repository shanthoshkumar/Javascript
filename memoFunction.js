function foo(a, b, c) {
    console.log("Fresh");
  return a + b + c;
}

let results = [];
function memo(sumFn){
  return function(a,b,c){
     const foundVal = results.find(result => result.arg1 === a && result.arg2 === b && result.arg3 === c);
   if(foundVal){
    console.log("Cache");
    return foundVal.sum;
   }
   const result = sumFn(a,b,c);
   results.push({arg1: a, arg2: b, arg3: c, sum: result});
   return result;
}

   
}
const m1 = memo(foo);
console.log(m1(1, 2,3))
console.log(m1(1, 2,3))
console.log(m1(2,3,4))
console.log(m1(2,3,4) )
 // 6 from fresh
 // 6 from cache
 // 9 from fresh
// 9 from cache

