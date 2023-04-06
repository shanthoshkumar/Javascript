const colors = ["green", "red", "blue", "yellow"];
const n = 9;

let colorsArr = [];

let index = 0;
for(let i=0 ; i<n; i++){
  if(  i % colors.length === 0){
       index = 0;
    }else{
        index ++;
    }
       colorsArr.push(colors[index]);
}
const items = colorsArr.reverse().map((color,index) =>  `${color} 0px 0px 0px ${(index + 1) * 10}px`);

document.getElementById('target').style.boxShadow = items.join(',')