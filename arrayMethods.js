const items = [
    { name: 'Book', price: 50},
    { name: 'Box', price: 35},
    { name: 'Pencil', price: 10},
    { name: 'Pen', price: 20},
    { name: 'Pad', price: 40},
];

// Filter
const filteredResult = items.filter(item => item.price < 40)
console.log('Filter: ',filteredResult);

// Map
const mappedResult = items.map(item => item.name);
console.log('Map: ',mappedResult);

// ForEach
items.forEach(item => console.log('ForEach:', item))

// Find
const foundResult = items.find(item => item.price < 40);
console.log('Find: ',foundResult);

// Some
const someResult = items.some(item => item.name.startsWith('B'))
console.log('Some: ',someResult);

// Every
const everyResult = items.every(item => item.name.startsWith('P'))
console.log('Every: ',everyResult);

// Sort
const sorter = (a,b)=> {
    if( a.price < b.price){
        return -1;
    }
    if( a.price > b.price){
        return 1;
    }
    return 0;
}
const sortResult = items.sort(sorter)
console.log('Sort: ', sortResult);

// Reduce
const reducer = (acc,item) => item.price + acc;
const reducerResult = items.reduce(reducer, 10);
console.log('Reduce: ',reducerResult);

// Shift
const shiftResult = items.shift();
console.log('Shit: ', shiftResult);
console.log('Original: ', items);

// UnShift
const unshift = items.unshift({name: 'Bag', price: 200});
console.log('UnShift: ', unshift);
console.log('Original: ', items);

// Slice
const sliceResult = items.slice(0,2);
console.log('Slice: ', sliceResult);
console.log('Original: ', items);

// Splice
const spliceResult = items.splice(0,2);
console.log('Splice: ', spliceResult);
console.log('Original: ', items);
