
        let nums = []
        let startPoint = true;

        function sort(startPoint) {
            while (startPoint) {
                let userinput = Number((prompt("Enter a number: ")))
                if (isNaN(userinput) === true || userinput === 0) {
                break;
                }
                nums.push(userinput)
            }

            sorted = nums.sort((a, b) => b - a)
            console.log(sorted)
        }

        sort(startPoint)
