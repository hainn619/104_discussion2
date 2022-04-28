function Student(fname, lname, age, isActive){
    this.fistName=fname;
    this.lastName=lname;
    this.age= age;
    this.isActive=isActive;

}

let student1= new Student("hai","nguyen",25,true);
let student2= new Student("thanh","nguyen",30,true);
console.log(student1,student2);
