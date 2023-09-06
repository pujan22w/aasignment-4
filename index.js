document.querySelector('.one').addEventListener('mouseover',changeColor);
function changeColor(){
let paragraph = document.querySelector('.one').textContent
 let split = paragraph.split(' ');    
 console.log(split);
 document.querySelector('.one').innerHTML='';
 split.forEach(value=>{
    const sp= document.createElement('span');
if( value === value.toUpperCase()){
   sp.classList.add('color');
}
sp.textContent= value + ' ';
document.querySelector('.one').appendChild(sp);
 });
}

