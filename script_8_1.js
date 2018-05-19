function isPrime(num) {
    // Loops for every number less than the given num but greater than 1
    for (var i = 2; i < num; i++) {
        // As soon as a factor is found, return false
        if (num % i == 0) return false;
    }
    // Otherwise the num is prime
    return true;
}