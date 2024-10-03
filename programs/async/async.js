// const hello=async()=>{
//  console.log('one');
//    let num1=10;
//    let num2=20;
//    sum=num1+num2;
//    console.log(await(sum));
//    console.log('three');
//    console.log('four');
// }

// hello()

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);

//   console.log(await(sum));
  console.log('three');
    console.log('four');
    // Expected output: "resolved"
  }
  
  asyncCall()