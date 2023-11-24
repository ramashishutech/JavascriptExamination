//what is call back function
/* A collback function is a function passad into another function as an argument whitch is then invacked inside the outer function to comleted some kind of routine or action */
 function hello(){
    console.log("welcom in javaScript to callBackfunction")
 }
 function Name(collback ,secondcallback){
    collback()
    
 let firstName="Ashish";
 let lastName="kumar";
 let fullName=firstName +" "+lastName;
 console.log(fullName);
 secondcallback()

 }Name(hello, hi);

 function hi(){
    console.log("thank you")
 }