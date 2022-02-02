const left=document.querySelector("#left");
const right=document.querySelector("#right");
const itemsList=document.querySelector("#items");

const computedStyles = window.getComputedStyle(items);


//let currentRight=0;


right.addEventListener('click',function(event){
    event.preventDefault();

    let currentRight=parseInt(computedStyles.right)  //parseInt приводит функцию к числу

    //if(currentRight<500){

       // currentRight +=100;

       // items.style.right="${currentRight}px";  

    //}

    if (currentRight < 500) {
        itemsList.style.right = currentRight + 100 + "px";
      }

    
   
});



left.addEventListener('click',function(event){
    event.preventDefault();

    let currentRight=parseInt(computedStyles.right)

    if (currentRight > 0) {
        itemsList.style.right = currentRight - 100 + "px";
      }
    
});
