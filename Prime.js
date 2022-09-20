const primeCheck = (num) => {
    if (num <= 1) {
        console.log(num + " is not a prime number.");
    }
    else if (num == 2) {
        console.log(num + " is a prime number.");
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                console.log(num + " is not a prime number.");
                return;
            }
        }
        console.log(num + " is a prime number.");
    }
}

primeCheck(4)
// 4 is not a prime number.

primeCheck(5)
// 5 is a prime number.
