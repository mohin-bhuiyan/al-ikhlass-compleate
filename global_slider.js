let slider= document.querySelector(".slider");

console.log(slider.children.length);
  let lengths = slider.children.length;

  console.log(slider.children[0]);
  let count = 0;



setInterval(() => {
   next();
}, 1500);


  function next(){
    
    
    react();
    count++;
  }


  // function prev(){
  //           count--;

  //           react();
        
  // }




  function react(){
      console.log("this is on function:"+count);
     if(count>=slider.childElementCount){
       slider.style.transition="none";
      count=0;
     }else if( count < 0){
        slider.style.transition="none";
      count= lengths -1;
        
        
     }else{
      // slider.style.transform=`translateX(${-count * 100}%)`;
    slider.style.transition="1s";
     }
     
slider.style.transform=`translateX(${-count * 100}%)`;
    
  }
