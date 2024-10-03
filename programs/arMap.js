// const numbers=[1,2,3,4,5,6]

// let result= numbers.map((num)=>{  //num ---name
//     console.log(num);
//   return num*2
// })

// console.log(result);

const fruits=["apple","orange","grapes" ]

const fruitBasket=fruits.map((fruit)=>{
     console.log(fruit);

    return fruit.toUpperCase()
    
})

console.log(`FruitBasket ${fruitBasket}`);


fruits.map((fruit)=>{
    console.log(fruit);

let manojDoubt= fruit.toUpperCase()
console.log(manojDoubt);
   
})


//try forEach

// const fruitFilter=fruits.filter((fruit)=>{
//     return fruit!='orange'
// })
// console.log(fruitFilter);

// let stat="hello world";
// let splitedArr=stat.split("")
// console.log(stat.split(""));
// console.log(splitedArr.join(""));

// let stat1="hello, world";
// console.log(stat1.split(","));

console.log();

 let car=["bmw","benze","audi"]
 let brand=[]
 car.forEach((c)=>{
    brand.push(c)
 })


 console.log(brand);


 
