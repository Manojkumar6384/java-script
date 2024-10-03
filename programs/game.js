let user = "paper"
let bot = "paper"

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
            console.log("user win the game")
        else(bot=='Scissors')
            console.log("bot win the game ")
        break;
    case 'Scissors':
        if (bot == 'scissors')
            console.log("tie")
        else if (bot == 'stone')
            console.log("bot win the game")
        else (bot=='paper')
        console.log("user win the game ")
        break;

}