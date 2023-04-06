console.log('Add using function', add(1,2));
function add(a,b){
    return a +b;
}

const addNum = (a,b) => a + b;
let addNumber = (a,b) => a + b;
var addN = (a,b) => a + b;
console.log('Add using const', addNum(3,4));
console.log('Add using let', addNumber(5,6));
console.log('Add using var', addN(7,8));
