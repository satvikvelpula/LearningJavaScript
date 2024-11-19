
const confirmation = confirm("Should I calculate the square root?")
if (confirmation === true) {
    const num = parseInt(prompt("Enter a number"))
    const sqrt = Math.sqrt(num)
    document.getElementById('target').innerHTML = 'Square root: ' + sqrt;
}
