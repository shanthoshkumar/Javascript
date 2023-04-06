// While using regular function, the value of "this" depends on the following;
// Method ("this" used inside a method that is defined inside an Object) ->  refers to Object
// Function ("this" used inside a method that is defined inside another function)-> Global, Window

// Illustration 1
let person = {
    firstname: 'John',
    secondname: 'Kennedy',
    print1 : function(){
        console.log(this, this.firstname)
         function print2(){
            console.log(this, this.secondname) 
        }
        print2()
    }
}

person.print1()


// Illustration 2

function print(){
    console.log(this.name, this.age);
}

let personDetails = {
    name: 'Rohit',
    age: 30,
    printName: print,
    nestedPerson : {
        name: 'Kohli',
        age: 31,
        printName : print
    }
};
personDetails.printName();
personDetails.nestedPerson.printName();



// // While using arrow function, the value of "this" depends on where the arrow function is defined

// let person = {
//     firstname: 'John',
//     secondname: 'Kennedy',
//     print1 : function(){
//         console.log(this.firstname)
//          const print2 = () => {
//             console.log(this.secondname) // in arrow function "this" doesn't have its own value, it refers to person obj since the function it is defined in it
//         }
//         print2()
//     }
// }
// person.print1()