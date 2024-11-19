
        let nums = []
        let startPoint = true;

        while (startPoint === true) {
            let user_num = Number(prompt("Please enter a number: "))
            nums.push(user_num)
            if (user_num === 0 || user_num === isNaN(user_num)) {
                break;
            }

            else if (user_num in nums) {
                alert("Number already in list. Quitting program.")
                let set = new Set(nums)
                let arr = []
                for (let i of set) {
                    arr.push(i)
                }
                console.log(arr.sort())
                break;
            }
        }