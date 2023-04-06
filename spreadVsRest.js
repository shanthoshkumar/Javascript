// Rest operator
function display(a,b,...months){
    console.log(a,b,...months);
}

display('Jan', 'Feb')

display('Jan', 'Feb', 'March')


display('Jan', 'Feb', 'March', 'April', 'May', 'June')

// Spread operator
display(...['July', 'August', 'September'])