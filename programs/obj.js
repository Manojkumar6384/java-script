// 


// };

// // console.log(student.fName);
// // console.log(student["fName"])

// student.marks=78;   //assigning
// console.log(student);
// console.log(student.fullName());

// const emp={

// }
// console.log(emp);
// emp.name="Vinoth"
// emp.dept="DEV"
// emp.salary=50000
// console.log(emp);

// let num1=10;
// let num2=10;

// function sum(){
//   console.log(num1+num2);
// }


// sum()
// console.log(student.fullName());


// const employee={
//     empname:"Balaji",
//     phoneNo:"8154348292",
//     department:"Testing",
//     score:345,
//     taskdone:13,
//     agee:12,

//     age:function (){
//         return this.agee + "yrs old"
//     }

      

// };
// console.log(employee.age());
// console.log(employee)


// const mystud=new Object()
// mystud.name="Ari"
// console.log(mystud);

// const project=new Object()
// project.title="ott application"
// project.tools="html,css,nodejs"
// console.log(project);

// const system={
// brand:"Lg",
// intel:"i5",
// ram:"12gb",
// rom:"1tb",
// price:150000,
// gst:7500,
// total:function sum(){
//     return this.price+this.gst
// }
// }
// console.log(system);
// console.log(system.total());


// function students(fname,initial,grade,number,language){
//     this.Fname=fname,
//     this.initial=initial,
//     this.grade=grade,
//     this.number=number,
//     this.language=language,
//     this.grad='It'
// }
// students.prototype.nationality="indian"

// let Manoj= new students("Manoj","S","A", 989765567,"Tamil")
// let vinoth= new students("Vinoth","S","A", 989765567,"Tamil")
// console.log( vinoth.nationality);
// console.log( vinoth)

function mobile(brand,model,price,ram,rom,pixels){
    this.brand=brand
    this.model=model
    this.price=price
    this.ram=ram
    this.rom=rom
    this.pixels=pixels
}
let task=[]



let samsung=new mobile("samsung","s24",89000,"8gb","128gb","50mp")
let apple=new mobile("iphone","13",63000,"4gb","128gb","12mp")
let vivo=new mobile("vivo","x50",25000,"4gb","64gb","50mp")

task.push(samsung,apple,vivo)
const pricelimit=30000


let filteredMob= task.filter((t)=>
    t.price > pricelimit
)

console.log(filteredMob);














