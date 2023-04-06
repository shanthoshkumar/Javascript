
// Shallow copy of objects

// Using spread operator
const objX = {name:'John', age: 25, skills: ['Javascript', 'Node js']};
const objY = {...objX};
objY.name = 'Alice';
console.log(objX);
console.log(objY);

const arrX = [1,2,{name: 'Stokes'}];
const arrY = [...arrX];
arrY[0] = 10;
console.log(arrX);
console.log(arrY);



// Using Object.assign method
const objX = {name:'John', age: 25, skills: ['Javascript', 'Node js']};
const objY = Object.assign({},objX);
objY.age = 30;
console.log(objX);
console.log(objY);

const arrX = [1,2,{name: 'Stokes'}];
const arrY =  [].concat(arrX) // (or) arrX.slice(); (or) Object.assign([],arrX)
arrY[0] = 10;
console.log(arrX);
console.log(arrY);



// Deep copy of objects

const objX = {name:'John', age: 25, skills: ['Javascript', 'Node js']};
// Fails to create a copy, since it is a reference type
const objY = {...objX};
objY.skills[0] = 'Typescript'   
console.log(objX);
console.log(objY);

const arrX = [1,2,{name: 'Stokes'}];
// Fails to create a copy, since it is a reference type
const arrY = [...arrX];
arrY[2].name = 'Ben';
console.log(arrX);
console.log(arrY);




const objX = {name:'John', age: 25, skills: ['Javascript', 'Node js']};
// Fails to create a copy, since it is a reference type
const objY = Object.assign({}, objX);
objY.skills[1] = 'Python'
console.log(objX);
// console.log(objY);

const arrX = [1,2,{name: 'Stokes'}];
// Fails to create a copy, since it is a reference type
const arrY =  Object.assign([],arrX) // (or) [].concat(arrX) (or) arrX.slice();
arrY[2].name = 'Ben';
console.log(arrX);
console.log(arrY);


// Correct method to do a deep copy, specially used when reference types are there in the source object


const objX = {name:'John', age: 25, skills: ['Javascript', 'Node js']};
const objY = JSON.parse(JSON.stringify(objX));
objY.skills[0] = 'Typescript' 
objY.skills[1] = 'Python'   
console.log(objX);
console.log(objY);

const arrX = [1,2,{name: 'Stokes'}];
const arrY = JSON.parse(JSON.stringify(arrX));
arrY[2].name = 'Ben';
console.log(arrX);
console.log(arrY);