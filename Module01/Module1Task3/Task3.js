
const int1 = parseInt(prompt("Enter the first integer: "))
const int2 = parseInt(prompt("Enter the second integer: "))
const int3 = parseInt(prompt("Enter the third integer: "))

function Addition(int1, int2, int3) {
    return int1 + int2 + int3
}

function Multiplication(int1, int2, int3) {
    return int1 * int2 * int3
}

function Average(int1, int2, int3) {
    return (int1 + int2 + int3) / 3
}

Addition(int1, int2, int3)
Multiplication(int1, int2, int3)
Average(int1, int2, int3)

document.querySelector('#target').innerHTML = Addition(int1, int2, int3) + ' - Addition'
document.querySelector('#target-2').innerHTML = Multiplication(int1, int2, int3) + ' - Multiplication'
document.querySelector('#target-3').innerHTML = Average(int1, int2, int3) + ' - Average'
