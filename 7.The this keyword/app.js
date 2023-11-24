//this keyword refer to global variable
 // this is simpale example
var a=19;
function add(a,b){
console.log(a+b + this .a);
}add(4,5);
// seconde example on object

var student={
    Name:"Ashish",
    introduction(){
        console.log("my name is "+this.Name);//here is refer name vale using this keyword
    }
    
} 
 student.introduction()


 //this is third example

 var employe={
    Name:"Ashish",
    profetion:["devlepar","desginer","accountent"],
    info(){
        this.profetion.forEach(function(elment){
            console.log(this.Name,elment);
        },this)
    }
 }
 employe.info();