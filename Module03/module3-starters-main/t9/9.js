const calculation_input = document.getElementById("calculation")
const calculate_button = document.getElementById("start")
const get_result = document.getElementById("result")

calculate_button.addEventListener('click', () => {

    const output = calculation_input.value

    const find_integers = output.match(/[+-]?\d+(\.\d+)?/g).map(parseFloat);

    const find_operators = output.match(/[+\-*/]/g)

    // Number - operator algorithm, there has to be operators = numbers - 1 operators in the input (for an equal number of operators and numbers)

    if (!find_integers || !find_operators || find_operators.length !== find_integers.length - 1) {
        get_result.innerHTML = "Invalid input entered!"
        return
    }

    let find_result = parseFloat(find_integers[0])
    for (let i = 0; i < find_operators.length; i++) {
        const num = parseFloat(find_integers[i + 1])
        const operator = find_operators[i]

        if (operator === '+') {
            find_result += num
        }

        else if (operator === '-') {
            find_result -= num
        }

        else if (operator === '/') {
            find_result /= num
        }

        else if (operator === '*') {
            find_result *= num
        }
    }

    get_result.innerHTML = find_result


})