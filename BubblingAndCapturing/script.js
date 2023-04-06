const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// By default - false, not falling in CAPTURING cycle
grandParent.addEventListener('click', function(e){
    console.log('Grand parent clicked')
}, true)

parent.addEventListener('click', function(e){
    console.log('Parent clicked')
}, false)

child.addEventListener('click', function(e){
    console.log('Child clicked')
}, true)