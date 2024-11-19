

    let nums = []
    for (let i = 0; i < 5; i++) {
        let user_numbers = prompt("Enter a number: ")
        nums.push(user_numbers)
    }

function reverseArray(nums) {
    let left_pointer = 0;
    let right_pointer = nums.length - 1;

    while (left_pointer < right_pointer) {
        let temp = nums[left_pointer];
        nums[left_pointer] = nums[right_pointer];
        nums[right_pointer] = temp;

        left_pointer++
        right_pointer--
    }

    return nums;

}

    let reversed_nums = reverseArray(nums)

    for (let j = 0; j < reversed_nums.length; j++) {
        let targetList = document.getElementById("targetList")
        let li = document.createElement("li")
        li.innerText = reversed_nums[j]
        targetList.appendChild(li)
    }