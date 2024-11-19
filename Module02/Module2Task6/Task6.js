
        let finish = false;
        let tries = []

        function Roll() {
            return Math.floor(Math.random() * 6) + 1
        }

        while (finish === false) {
            let roll = Roll()
            tries.push(roll)
            if (roll === 6) {
                console.log(tries)
                break;
            }
        }