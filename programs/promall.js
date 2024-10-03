let order1=new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,1000,'Order 1 delivered')
    }else{
        reject('Order1 not delived')
    }
})
let order2=new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,2000,'Order 2 delivered')
    }else{
        reject('Order2 not delived')
    }
})

let order3=new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,3000,'Order 3 delivered')
    }else{
        reject('Order 3 not delived')
    }
})

// Promise.all([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

// Promise.race([order1,order2,order3]).then(msg=>console.log(msg))
//   .catch(msg=>console.log(msg))

// Promise.allSettled([order1,order2,order3]).then(msg=>console.log(msg))
//  .catch(msg=>console.log(msg))

// Promise.any([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))
let order1=new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,2000,'Order 1 delivered')
    }else{
        reject('Order1 not delived')
    }
})
let order2=new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,1000,'Order 2 delivered')
    }else{
        reject('Order2 not delived')
    }
})

let order3 = new Promise((resolve,reject)=>{
    let delivered=true;

    if(delivered){
        setTimeout(resolve,3000,'Order 3 delivered')
    }else{
        reject('Order 3 not delived')
    }
})

// Promise.all([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

// Promise.race([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

// Promise.allSettled([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

// Promise.any([order1,order2,order3]).then(msg=>console.log(msg))
// .catch(msg=>console.log(msg))

Promise([order2,order3]).then(msg=>console.log(msg))
.catch(msg=>console.log(msg))