 function teacher(subject){
    this.subject=subject;
 }
 teacher.prototype.class=function(){
    console.log("Ramesh");
 }
 let teacher1=new teacher("math");
 console.log(teacher1);
 
 
 
 
 
 
 
 function student(name,age,address){
 this.name=name;
 this.Age=age;
 this.address;

 }
 student.prototype.fullName=function(){
    console.log(this.name +" "+ this.Age)
 }
 student.prototype.__proto__=Object.create(teacher.prototype)//this methode connect

  let students=new student("Ashish",23,"bhagirathpur");
  let student1=new student("Annad",24,"jalalbad")
 
 
console.log(students);
console.log(student1.class());