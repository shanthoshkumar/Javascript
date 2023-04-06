let images = [
    "https://plus.unsplash.com/premium_photo-1675622664532-3e3b0ce3b7b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1556905200-279565513a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1596306499317-8490232098fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1593604572577-1c6c44fa246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1490761668535-35497054764d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1610036615775-f5814e8bd4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
];

let image = document.querySelector('.image');
let thumbnails = document.querySelector('.thumbnails');

let mainImage = document.createElement('img')
mainImage.src = images[0]
image.appendChild(mainImage)

for(let i=0; i<images.length; i++){
    let img = document.createElement('img');
    img.src= images[i];
    thumbnails.appendChild(img);
    img.addEventListener('click',function(e,index){
        mainImage.src = this.src;
        thumbnails.childNodes.forEach(thumbnail => thumbnail.classList.remove('focusedThumbnail'));
        img.classList.add('focusedThumbnail')
    })
}