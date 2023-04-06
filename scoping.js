
function scoping(){
    var a = 'A'
    if(true){
        const b = 'B';
        var c = 'C'
    }
    console.log(a,b,c);
}


{
    const a = 'aa';
    {
        const b = 'bb';
    }
    console.log(a,b);
}