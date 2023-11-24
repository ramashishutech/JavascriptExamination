/* what is an IIFE   (Immediately Invoked function Expression)is a function that runs the moment it is invoked or called in the JavaScript event loop.Having a function a that behaves that way can be useful in certain situation.IIFE prevent pollution of the golobal js scope* */




let s ="this invak function";

(function(){//Begnning of function

    console.log(s);
}())//End of function
//call the function excution



const str = "Hello world";
(function () {
    console.log(str);
}())


