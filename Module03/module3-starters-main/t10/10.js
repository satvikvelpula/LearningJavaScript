const get_form = document.getElementById('source')
const get_button = document.querySelector('input[type="submit"]')
const get_result = document.getElementById('target')



get_button.addEventListener('click', (event) => {
    event.preventDefault()
})

get_button.addEventListener('click', () => {
    get_first_name = document.querySelector('input[name="firstname"]').value
    get_last_name = document.querySelector('input[name="lastname"]').value

    if (!get_first_name || !get_last_name) {
        alert("Please enter a first name and a last name. ")
        get_result.innerHTML = `Invalid input. `
        return
    }

    get_result.innerHTML = `Your name is ${get_first_name} ${get_last_name}`


})