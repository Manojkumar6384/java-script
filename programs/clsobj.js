class pizza{
    constructor(name,type,size){
        this.name=name,
        this.type=type,
        this.size=size,
        this.toppings='olives'
    }
    bake(){
        return `Make ${this.name} ${this.type} pizza with ${this.size} add more ${this.toppings}`
    }
    getToppings(){
        return this.toppings
    }
    setToppings(topp){
        return this.toppings=topp
    }
}

class mypizza extends pizza{
     #orgeno='normal'   //private property #
    constructor(name,type,size,prize){
        super(name,type,size)
        this.prize=prize

    }
    bake(){
      return `Make ${this.name} ${this.type} pizza with ${this.size} add more ${this.toppings}`
    }
    getOrgeno(){
        return ` I'm using ${this.#orgeno} orgeno`
    }
}


const chiknPizza= new mypizza('chicken Pizza', 'nonveg', 'large', '299')   //inheriting the parent class

console.log(chiknPizza);
console.log(chiknPizza.orgeno);
console.log(chiknPizza.getOrgeno());


// const margerita=new pizza('Margarita', 'spicy', 'large')
// margerita.toppings='extra cheese'
// console.log(margerita);

//  console.log(margerita.setToppings('panner'));
//  console.log(margerita.getToppings());

  
//  console.log(Object.values(margerita));  //displays only values 
//  const {type}=margerita
//  console.log(type);
//  console.log(`i need ${type} pizza`);


//  class house{
//     constructor(land,type,budget,){
//         this.land=land
//         this.type=type
//         this.budget="35lakhs"
//     }
//     build (){
//         return `build a house in ${this.land} and design ${this.type} with ${this.budget}`
//     }
//     getbudget(){
//         return this.budget
//     }
//     setbudget(value){
//         return this.budget=value
//     }
//  }
//  let dreamhouse=new house ("10cent","2bhk",)

// console.log(dreamhouse.setbudget("20lakhs"));
// console.log(dreamhouse.build())
// let{land}=dreamhouse
// console.log(land);
// console.log(Object.values(dreamhouse));

// let age=60
 
// age>18 ? (age>18 && age<60 ? console.log("eligble for vote") : console.log("senior citizen")) : console.log("not eligble for vote");

