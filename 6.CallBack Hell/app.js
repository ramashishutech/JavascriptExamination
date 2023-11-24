/* The phenomenon which happens when we nest multiple callbacks within a
 function is called a callback hell. The shape of the resulting code structure 
 resembles a pyramid and hence callback hell is also called the “pyramid of the doom”.
  It makes the code very difficult to understand and maintain. It is most frequently seen 
  while working with Node.js. The code below shows an example of a callback hell*/

  
function fun1(){
 console.log("hello");
  function fun2(){
  console.log("hi");
    function fun3(){
      console.log("thank you");
     
  
     

    } fun3();
  }   fun2();
}fun1();