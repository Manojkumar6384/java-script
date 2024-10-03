// const user=fetch('https://jsonplaceholder.typicode.com/users') //log u will pending
// .then(response=>response.json()) //log u will get array but not as complete promise pending
// .then(res=>console.log(res[0].address.street))

const data=async()=>{
    console.log('hello');
    const user= await fetch('https://jsonplaceholder.typicode.com/users')
    console.log('hwhljlj');
  
    let result= await user();
    console.log(result);
    let filtAr=result.filter((r)=>{
        return r.username=='Bret'
    })
    
    console.log(filtAr);
    console.log('four');

 
}
data()