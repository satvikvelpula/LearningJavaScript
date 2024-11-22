const operation = document.getElementById('operation')
const calculate_button = document.getElementById('calculate')
const result_text = document.getElementById('result')

calculate_button.addEventListener('click', () => {

    // Getting the values of the first number, second number and each operation dynamically.
    const first_num = parseFloat(document.getElementById('num1').value)
    const second_num = parseFloat(document.getElementById('num2').value)
    const get_operation_value = operation.value

    if (isNaN(first_num) || isNaN(second_num)) {
        alert("Please enter some valid numbers")
    }

    else if (get_operation_value === 'add') {
        let summation = first_num + second_num
        result_text.innerHTML = `${summation}`
    }

    else if (get_operation_value === 'sub') {
        let subtraction = first_num - second_num
        result_text.innerHTML = `${subtraction}`
    }

    else if (get_operation_value === 'multi') {
        let multiplication = first_num * second_num
        result_text.innerHTML = `${multiplication}`
    }

    else if (get_operation_value === 'div') {
        let division = first_num / second_num
        result_text.innerHTML = `${division}`
    }


})










