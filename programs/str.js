let color="Yellow";
// console.log("the color is" + color);
console.log(`The color is ${color}`);
console.log(color.length); //find the length of the string here count the character
console.log(color.toLowerCase());
console.log(color.toUpperCase());
console.log(color.charAt(5));
console.log(color.charAt(color.length-1));  //6-1 =5 

let name2='Manoj'
let name3='vinoth'
console.log(name2.replace("Manoj","Vinoth")); //string.replace("what u wn replace","replacing word")
console.log(name2.includes("ez"));
console.log(name2.concat(" "+ name3)); 

let para="all is well"
console.log(para.length);
console.log(para.toUpperCase());
console.log(para.charAt(10))
console.log(para.charAt(para.length-4));
console.log(para.replace("well","good"));
console.log(para.concat(" "+"Good"));

let work="manOJkUmar"
let fs=work.charAt(0);
let fc=fs.toUpperCase()
let ss=work.slice(1)
let aa=ss.toLowerCase()
let result=fc+aa 
console.log(result);
