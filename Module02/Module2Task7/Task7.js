
        let finish = false;
        let tries = []

        let sides = parseInt(prompt("What's the number of sides for your dice? "))

        function Roll(sides) {
            return Math.floor(Math.random() * sides) + 1
        }

        while (finish === false) {
            let roll = Roll(sides)
            tries.push(roll)
            if (roll === sides) {
                console.log(tries)
                break;
            }
        }