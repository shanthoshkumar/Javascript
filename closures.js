function outerFunction(outer){
    const varZ = 'Z'
    return function innerFunction(inner){
        console.log('Outer: ', outer);
        console.log('Inner: ', inner);
        return function nestedInnerFunction(){
            console.log('Nested: ',varZ);
        }
    }
}

const result = outerFunction('X');
result('Y')();