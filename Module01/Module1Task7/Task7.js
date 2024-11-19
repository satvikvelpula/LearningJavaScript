
let user_dicerolls = parseInt(prompt("How many dice rolls?"))
let sum = 0;
let bank = 0;

for (let count = 0; count < user_dicerolls; count++) {
    let roll = Math.floor(Math.random() * 6) + 1

    console.log("Dice rolled! " + roll)

    bank += roll
}

sum += bank
console.log("Sum of the dice! " + sum)
document.getElementById('sum').innerHTML = "Total sum of dice: " + bank
