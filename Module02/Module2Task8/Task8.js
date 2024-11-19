
        let array = [
            ["Johnny"],
            ["DeeDee"],
            ["Joey"],
            ["Marky"]
        ]

        function concat(array) {
            let combined = ""
            for (let i of array) {
                for (let j of i) {
                    for (let k of j) {
                        combined += k
                    }
                }
            }

            return combined;

        }

        let string = concat(array)
        document.getElementById("target").innerHTML = string