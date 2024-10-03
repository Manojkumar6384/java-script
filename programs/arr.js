let arr=[1,2,3,4,5,6]
console.log(arr.length);
console.log(arr[0],arr[2]);


arr.push(7)  //add elemnt into the last char

console.log(arr);
arr.pop()
console.log(arr);  //remove last element
let alpha=["a","b","c",1,2,3]
alpha.pop()
console.log(alpha); 

// work on shift and unshift in Array
// how to convert string to number 
//at
//indexOf()
//lastIndexOf()
//find()

let result=arr.concat(alpha)
console.log(result);
console.log(result.reverse());  // to reverse the value
console.log(result.toString()); // convert arr to string
console.log();

console.log(result.slice(2,6));  //.slice(start value, ending value)  end value upto end value not end value

let arrr=[4,3,5,1,2,]

arrr.shift()

console.log(arrr);

arrr.unshift(7)
console.log(arrr);

let task=["1","2","5"]
console.log(typeof(task));
console.log(parseInt(task));
console.log(arrr.indexOf(8))
console.log(arrr.lastIndexOf(8));
console.log(arrr.at(6))
console.log(arrr.includes (4))
console.log(arrr.sort());
console.log(arrr.toSorted());
console.log(arrr.slice(0,1));

delete arrr[2]
console.log(arrr);










