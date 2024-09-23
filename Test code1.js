// Function to check if a number is prime
function isPrime(num) {
    // Edge cases: if number is less than 2, it's not prime
    if (num < 2) {
        return false;
    }

    // Loop to check divisibility
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number, it's not prime
        }
    }

    // If no divisors found, it's prime
    return true;
}

// Test the function with numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(i + " is a prime number");
    } else {
        console.log(i + " is not a prime number");
    }
}
