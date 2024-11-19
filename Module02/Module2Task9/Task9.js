
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        function evenNums(nums) {
            let even = []
            for (let i = 0; i < nums.length; i++) {
                if (i % 2 === 0) {
                    even.push(i)
                }
            }
            return even;
        }

        let call_even = evenNums(nums)
        let call_normal = nums
        console.log(call_even)
        console.log(call_normal)
