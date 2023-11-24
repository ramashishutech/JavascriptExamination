

// try{
//     var a=5;
//     var b=9;
//     if(a==b){
//         console.log("true");
//     };
    
// }
// catch{
//  console.log("false")
// }

try
{
     var result  =  Sum(10, 20); // Sum is not defined yet
}
catch(ex)
{
    console.log("error")
}
finally{
    console.log( "finally block executed");
}