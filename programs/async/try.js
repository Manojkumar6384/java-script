

function number(x,y){
try{
if(x+y>100){
    throw new Error('Enter a valid number')
}

 let sum=x+y
 return sum

}
catch(err){
console.log(err);
 console.error(err);
console.warn(err);
}
finally{
    console.log('bye statement');
}}
console.log(number(40,62));