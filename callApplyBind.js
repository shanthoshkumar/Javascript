let person1 = {
    firstName: 'Akshay',
    lastname: 'Saini',
    printName: function(){
        console.log(this.firstName+' - '+this.lastname)
        }
}
person1.printName();


let person2 = {
    firstName: 'Sachin',
    lastname: 'Tendulkar'
}

person1.printName.call(person2)

// Alternate explanation

let printName = function(native, ...skills){
    console.log(this.firstName+' - '+this.lastname+' - '+native+' - ',...skills)
}
// Call 
printName.call(person1,'Delhi','Html');
printName.call(person2,'Mumbai','Node');

// Apply
printName.apply(person1,['Delhi',...['Html','Javascript', 'Css']]);
printName.apply(person2,['Mumbai','Node']);

// Bind - returns copy of the printName method with binded arguments, so we can invoke the method whenever we want 
let print = printName.bind(person1, 'Kolkatta', 'Database');
console.log(print);
print();