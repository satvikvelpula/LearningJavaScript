const get_form = document.querySelector("form")

const get_input = document.getElementById("query")

const get_result = document.createElement('div')
get_result.id = "result"

document.body.appendChild(get_result)

get_form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    get_result.innerHTML = ""

    async function sendInput() {

        try {
            const get_input_value = get_input.value
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${get_input_value}`)
            const json_response = await response.json()

            for (let i of json_response) {
                let create_div = document.createElement('article')
                create_div.id = "show"
                let image_content;

                if (i.show.image?.medium) {
                     image_content = `<img src = "${i.show.image.medium}" alt = "${i.show.name}">`
                }

                else {
                    image_content = `<img src="https://via.placeholder.com/210x295?text=Not%20Found" alt="Image not available">`
                }

                create_div.innerHTML =
                `
                
                <h2>${i.show.name}</h2>
                <a target="_blank">${i.show.url}</a>
                ${image_content}
                
                <div>${i.show.summary}</div>

          
                `
                get_result.appendChild(create_div)
            }

            console.log(get_result)
        }

        catch (e) {
            console.error("Error")
        }
    }

    sendInput()
})


