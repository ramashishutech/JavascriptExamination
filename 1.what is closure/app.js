  //what is clsoures
   /*
   closure is a feature of javascript that allow inner function to access
   the outer scop of a function clouser helep in binding a function to its outer bounding and is create a block is also treatedm as a scope since Es6
   * */
  var x=10;
  function fun01(){
    var y=20;//free variable

     function fun02(){
    var z=15;//free variable
    var output=x+y+z;
    console.log(output);
    console.log(x);



}
 fun02();
  }
  fun01();

 //this is second example


  function my(){
    var str="hello"
    function myfunction(){
     var str1="Ashish";
     var c=str.concat(str1);
     console.log(c);

    }
    myfunction();

  }my();
  