let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}
rabbit.__proto__ = animal;
console.log(rabbit);
console.log(rabbit.eats);