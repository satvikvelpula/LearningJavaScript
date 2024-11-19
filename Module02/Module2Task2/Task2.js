

        let participants = parseInt(prompt("How many participants? "))
        let participant_list = []

        for (let i = 0; i < participants; i++) {
            let participants_names = prompt(`What is the name of Participant #${i + 1}?`)
            participant_list.push(participants_names)
        }

        let sorted = participant_list.sort()

        function toHTML(sorted) {
            for (let j = 0; j < sorted.length; j++) {
                let targetList = document.getElementById("targetList")
                let li = document.createElement("li")
                li.innerText = sorted[j]
                targetList.appendChild(li)
                sorted.sort()
            }
        }

        toHTML(sorted)




        /* The user tells how many participants, and the program asks the name of each participant logged. */

        /*
        *         let participants = parseInt(prompt("How many participants? "))
        let participant_list = []
        for (let i = 0; i < participants; i++) {
            let participants_names = prompt(`What is the name of Participant #${i + 1}?`)
            participant_list.push(participants_names)
        }

        sorted = participant_list.sort()

        for (let j = 0; j < sorted.length; j++) {
            let targetList = document.getElementById("targetList")
            let li = document.createElement("li")
            li.innerText = sorted[j]
            targetList.appendChild(li)
        }

        sorted.sort()
        *
        * */