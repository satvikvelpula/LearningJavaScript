
const num_of_dice = parseInt(prompt("Enter the number of dice: "))
const sum_eye = parseInt(prompt("Enter the sum of eye interest: "))

function DiceRoll(num_of_dice) { /* Dice roll function, based off of number of dice */
    let sum = 0;
    for (let i = 0; i < num_of_dice; i++) {
    sum += Math.floor(Math.random() * 6) + 1
    }
    return sum;
}

let simulations = 10000;
let success_count = 0;

for (let j = 0; j < simulations; j++) {
    let dice_sum = DiceRoll(num_of_dice)
    if (dice_sum === sum_eye) {
        success_count += 1
    }
}

let probability = (success_count / simulations) * 100 /* Probability formula */
probability.toFixed()

document.getElementById('target').innerHTML = "Probability to get sum " + sum_eye + " with " + num_of_dice + " dice is " + probability
