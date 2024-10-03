// let operations = 'ADD'
// let number1 = 10;
// let number2 = 20;

// switch (operations) {
//     case 'add':
//         console.log(number1 + number2);
//        break;
//     case 'sub':
//         console.log(number1 - number2);
//         break;
//     case 'mul':
//         console.log(number1 * number2);
//         break;

//     case 'div':
//         console.log(number1 / number2);
//         break;
//     default:
//         console.log('nothing mentioned here');
//         break
// }


// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(day);


let userArray=['stone','paper','scissors']
let randNum=Math.floor(Math.random()*3);
// console.log(randNum);

let user=userArray[randNum]

let bot = "stone"

switch (user) {
    case 'stone':
        if (bot == 'stone')
            console.log("tie")
        else if (bot == 'paper')
            console.log("bot win the game")
        else(bot=='Scissors')
            console.log("user win the game ")
        break;

    case 'paper':
        if (bot == 'paper')
            console.log("tie")
        else if (bot == 'stone')
            console.log("hello")
           
        else 
            console.log("3")
        break;

    case 'scissors':
        if (bot == 'scissors')
            console.log("tie")
        else if (bot == 'stone')
            console.log("bot win the game")
        else 
        console.log("user win the game ")
        break;

    default:
            console.log('invalid game');

}