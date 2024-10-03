 // % ++ -- 

// i++  I--
// i+1
// i-1

// Compartve operators

{/* < > <= >=  ==  ===  !=  !== */}
let a=11;

// console.log(a==10); //==  condition check not datatype
console.log(a=10);  //!=

let b="12";
console.log(b===12);  // condition + datatype  strict equality

console.log(b!==12);

//  && || !

if(a==10 && b==12){
    console.log("Condition true");
}
else{
    console.log("condition failed");
}

if(a==10 || b==12){
    console.log("Condition true");
}
else{
    console.log("condition failed");
}
let w="10"
console.log(w==="10");

let q=8
let e=4
let s=q/e
console.log(s);


if (q==8 && e==4){
    console.log("correct");
}
else{
    console.log("wrong");
}


const num1=10;
console.log(!(num1==11));  //!(true)--> fals   !(fal)=true

// ?: terynary operator

num1==11 ? console.log("Monoj is right") : console.log("Vinoth is right")   

num1==11 ? console.log("Monoj is right") : num1==10 ? console.log("hello") : console.log("hai") //nested ternary


if(num1==11){
    console.log("if working");
}
else{
    console.log("Else working");
}


a=10;
// a=a+5;
a+=5
a*=5



console.log(a);

console.log(3**2); //declaring exponents

let black=5;
let red="red"
let t= true;
let arr=[1,2,4,4]
let arr1=[2,4,6,8]
let result=[...arr,...arr1,90,56,78]  //spread operator



console.log(typeof(black));  //type of
console.log(typeof(arr));  

console.log((9+6)*2-1);  //grouping

// num1==12 ? console.log("it is true") : num1==15 ? console.log("it is correct") : num1==10 ? console.log("it is right") : console.log("it is fault");;
num1==10 ? (num1==11 ? console.log( "trueee") : console.log("falseee")) : console.log(runn);

console.log(result,black);

let age=60
 
age>18 ? (age>18 && age>60 ? console.log("eligble for vote") : console.log("senior citizen")) : console.log("not eligble for vote");

console.log(age);

