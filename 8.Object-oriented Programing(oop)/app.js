


function student(Name,age,adress){

    this.Name=Name,
    this.age=age,
    this.adress=adress


}
student.prototype.info=function(){
    console.log(this.Name +" "+ this.adress)
}
 let student1=new student("Ashish",22,"bhagirathpur");
console.log(student1);
student1.info()