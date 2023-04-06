// const input = document.querySelector('input');
// const debounceText = document.querySelector('h1');

// const debounce = (callback, delay = 2000) => {
//     let timeout;
//     return (...args)=>{
//         clearTimeout(timeout);
//         timeout = setTimeout(() => callback(...args), delay)
//     }
// };

// const updateDebounceText = debounce(text => {
//     debounceText.textContent = text;
//     console.log('search for: ', text);
// });

// input.addEventListener('input', (e) => {
//     updateDebounceText(e.target.value);
// })

const inputElement = document.querySelector('input')
const textElement = document.querySelector('h1')

const debounce = (callbackFn, delay = 0) =>{
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callbackFn(...args)
        }, delay)
    }
}

const updateDebounceText = debounce(text => {
    textElement.textContent = text.toUpperCase()
},1000)

inputElement.addEventListener('input', (e) => {
    updateDebounceText(e.target.value)
})