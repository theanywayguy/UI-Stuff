document.addEventListener('DOMContentLoaded',()=>{
 const h1= document.querySelector('h1');
 h1.style.animationPlayState= 'paused';
 document.querySelector('#animation').onclick=()=>{
    if(h1.style.animationPlayState==='paused'){
        h1.style.animationPlayState='running';
    }
    else{
        h1.style.animationPlayState='paused';
    }
 }
 document.querySelector('#change').onclick=()=>{
    if(h1.innerHTML===`RANGE ROVER`){
        h1.innerHTML=`MULHAM`;
    }
    else{
        h1.innerHTML=`RANGE ROVER`;
    }
 }
})