const boxes = document.querySelectorAll('.box')
const image = document.querySelector('img')
const span = document.querySelector('span')

boxes.forEach((box,index) =>{
    box.addEventListener('dragover',(e)=>{
        e.preventDefault()
        console.log('dragging');
        box.classList.add('hovered')
    })

    box.addEventListener('dragleave', (e) =>{
        e.preventDefault()
        box.classList.remove('hovered')
    })

    box.addEventListener('drop', (e) =>{
        e.preventDefault();
        box.appendChild(image)
        span.textContent = index + 1;
    })
})