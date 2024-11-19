
        let dog_list = []
        for (let i = 0; i < 6; i++) {
            let dogs = prompt(`Enter dog ${i + 1}'s name: `)
            dog_list.push(dogs)
        }

        dog_list.sort().reverse()

        function toHTML(dog_list) {
            for (let j = 0; j < dog_list.length; j++) {
                let target = document.getElementById("target")
                let li = document.createElement("li")
                li.innerText = dog_list[j]
                target.appendChild(li)
            }
        }

        toHTML(dog_list)
