// function multiply(x){

//     function multiplyTwo(y){
//         // console.log(y);
//         return x*y
//     }

//     return multiplyTwo
// }

// let clos=multiply(2)
// console.log(clos(3));
// console.log(clos(4));
// console.log(clos(5));

 function createCounter(){
    let count=0;
    function incCounter(){
        return count++
    }
    return incCounter
 }

 let closure=createCounter()
 console.log(closure());
 console.log(closure());
 console.log(closure());
 console.log(closure());
 console.log(closure());