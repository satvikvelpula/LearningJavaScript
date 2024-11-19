
let user_number = parseInt(prompt("Enter a number: "))
let isPrime = true;

if (user_number < 2) {
    isPrime = false;
}

else if (user_number === 2) {
    isPrime = true;
}

else if (user_number % 2 === 0) {
    isPrime = false;
}

else {
    const limit = Math.sqrt(user_number)
    for (let i = 3; i <= limit; i += 2) {
        if (user_number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(user_number + " is a prime number. ")
    document.getElementById('target').innerHTML = user_number + " is a prime number. "
} else {
    console.log(user_number + " is not a prime number. ")
    document.getElementById('target').innerHTML = user_number + " is not a prime number. "
}