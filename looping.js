console.log('for with VAR');
for(var i=0; i<5; i++){
    console.log(i);
}

console.log('for with Var & setTimeout');
for(var i=0; i<5; i++){
    setTimeout(()=>{
         console.log(i)
    },1000)
}

console.log('for with LET');
for(let i=0;  i<5; i++){
    console.log(i);
}

console.log('for with LET & setTimeout');
for(let i=0;  i<5; i++){
    setTimeout(() => {
    console.log(i);
    },1000)
}

console.log('Internal working of for with LET & setTimeout');
{
    let index = 0;
    {  
        // iteration 1
        let index;
        index = 0; // takes prev scope value

        setTimeout(()=> console.log(index), 3000);
        {  
            // iteration 2
            let index;
            index = 0; // takes prev scope value
            index ++; 
            setTimeout(()=> console.log(index), 3000) // index = 1
            {  
                // iteration 3
                let index;
                index = 1; // takes prev scope value
                index ++; 
                setTimeout(()=> console.log(index), 3000) // index = 2
                {  
                    // iteration 4
                    let index;
                    index = 2; // takes prev scope value
                    index ++;
                    setTimeout(()=> console.log(index), 3000) // index = 3
                    {  
                        // iteration 5
                        let index;
                        index = 3; // takes prev scope value
                        index ++; 
                        setTimeout(()=> console.log(index), 3000) // index = 4
                    }
                }
            }
        }
    }
}