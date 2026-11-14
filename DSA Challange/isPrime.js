function rangeIsPrime(num) {
    let res = [];

    for (let i = 2; i <= num; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            res.push(i);
        }
    }

    return res;
}

console.log(rangeIsPrime(20));