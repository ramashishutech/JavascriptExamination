// Asynchronous Programming
// In this method of programming, the users do not need to wait for the main thread to be completed. Instead, parallel processing is possible in the asynchronous method. Thus the user can execute a current task without worrying about the completion of the previous one. Due to this behaviour, an asynchronous method is called a non-blocking code. 

// // Let us now understand this asynchronous way of programming with an example.

// function print_message(){
//     console.log("Welcome in javaScript ")
// }

// function Caller_function(callback){
 
//     console.log("Before calling the callback function");
  	
//     // Calling the callback function in setTimeout
//     setTimeout(callback, 3000);
  	
//     console.log("After calling the callback function")
// }

// // Making the call
// Caller_function(print_message);




function fun1(){
    setTimeout(()=>{
     console.log("thank you");
    },3000);
}

function fun2(callback1,callback2){
    console.log("hi");
    callback1();
    callback2();
}
function fun3(){

    setTimeout(()=>{
        console.log("welcome")
    },1000);
}
fun2(fun1,fun3);