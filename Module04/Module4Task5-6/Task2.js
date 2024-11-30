// https://api.chucknorris.io/jokes/random

const get_form = document.querySelector('form')
const create_div = document.createElement('div')
create_div.id = 'joke-div'

document.body.appendChild(create_div)


get_form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    create_div.innerHTML = ""
    async function getJoke() {
        try {
            const get_input = document.getElementById('query')
            const get_input_value = get_input.value
            const send_request = await fetch(`https://api.chucknorris.io/jokes/search?query=${get_input_value}`)
            const response = await send_request.json()
            for (let i of response.result) {

                let article = document.createElement('article')
                article.id = 'result'

                article.innerHTML = i.value

                create_div.appendChild(article)
            }
        }

        catch (error) {
            console.log("Error")
        }
    }

    getJoke()
})




