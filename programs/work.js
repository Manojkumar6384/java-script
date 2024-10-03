function countVowels(a1) {
    let match= a1.match("a","e","i","o","u");
    return match ? match.length : a1 ;

}
const string = "Hello World";
const result = countVowels(string);
console.log(result);
//-------------------x-------------------------x------------------------------x-------------------------//
function Duplicates(arr){

    return arr.filter((value,index)=>
        arr.indexOf(value)!==index
);
}
const newarray=[1,2,3,4,5,6,6,7,8,3,4,5]
const duplicates=Duplicates(newarray);
console.log(duplicates);

// ----------------x------------------------x-----------------------x--------------------x----------------//

const sumOfEvenNumbers = arr => 
    arr.filter((sum, num) => num % 2 === 0 ? sum + num : sum, 0);


const array = [1, 2, 3, 4, 5, 6];
console.log("Sum of even numbers:", sumOfEvenNumbers(array));
