// let newObject={
//     name:'naveen',
//     age:12,
//     grade:'a',
//     grad:'bsc',
//     phone: "1-463-123-4447"
// }

// let convObj=JSON.stringify(newObject) //convert obj to json
// console.log(newObject);
// console.log(convObj);
// console.log(JSON.parse(convObj)); //convert from json to normal obj

// let payment=new Promise((resolve,reject)=>{
//     let status=false;
//     if(status){
//         resolve()
//     }else{
//         reject()
//     }
// })

// function success(){
//     console.log('payment successful');
// }
// function nextSucc(){
//     console.log('give me treat');
// }
// function failure(){
//     console.log('payment failure');
// }

// payment.then(success)
// .then(nextSucc)
// .catch(failure)

// let passenger={
//   pass1: "manoj",
//   p1age:22,
//   pass2:"vinoth",
//   p2age:22
// }

// let train=JSON.stringify(passenger)
// console.log(train);
// console.log(JSON.parse(train));


// let transaction= new Promise((result,errorr)=>{
//     let process=false;
//     if (process){
//         result()
//     }
//     else{
//         errorr()
//     }
// })

// function postive(){
//     console.log("transaction is successful");
// }
// function negative(){
//     console.log("transaction is failed");
// }
// transaction.then(postive)
// .catch(negative)

let toss = new Promise((result, error) => {
//     const coin = Math.floor(Math.random()*2)
// console.log(a1);
     let coin = 0;
    if (coin==0) {
        result()
    }
    else{
        error()
    }

})
function tail() {
    console.log("tail");
}
function head() {
    console.log("head");
}
toss.then(head)
    .catch(tail)


